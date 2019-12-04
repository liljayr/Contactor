import * as FileSystem from 'expo-file-system';
import * as Contacts from 'expo-contacts';
import * as Permissions from 'expo-permissions';

const contactDirectory = `${FileSystem.documentDirectory}contacts`;

const onException = (cb, errorHandler) => {
  try {
    return cb();
  } catch (err) {
    return errorHandler(err);
  }
};

export const cleanDirectory = async () => {
  await FileSystem.deleteAsync(contactDirectory);
};


export const loadContact = async (fileName) => FileSystem.readAsStringAsync(`${contactDirectory}/${fileName}`, {
  encoding: FileSystem.EncodingType.UTF8,
});


export const getContactById = async (id) => {
  const fileName = `${id}.json`;
  return JSON.parse(await loadContact(fileName));
};


export const addContactFile = async (id, contents) => {
  const fileName = `${id}.json`;
  await onException(
    () => FileSystem.writeAsStringAsync(
      `${contactDirectory}/${fileName}`,
      contents,
      { encoding: FileSystem.EncodingType.UTF8 },
    ),
  );
  return JSON.parse(await loadContact(fileName));
};

export const remove = async (name) => onException(() => FileSystem.deleteAsync(`${contactDirectory}/${name}.json`, { idempotent: true }));

export const editContact = async (id, contents) => {
  remove(id);
  return addContactFile(id, contents);
};

const setupDirectory = async () => {
  const dir = await FileSystem.getInfoAsync(contactDirectory);
  if (!dir.exists) {
    await FileSystem.makeDirectoryAsync(contactDirectory);
  }
};

export const getAllContacts = async () => {
  // Check if directory exists
  await setupDirectory();
  const result = await onException(() => FileSystem.readDirectoryAsync(contactDirectory));
  if (result.length > 0) {
    return Promise.all(result.map(async (fileName) => (JSON.parse(await loadContact(fileName)))));
  }
  return [];
};

export const importAllContacts = async (id) => {
  const status = await Permissions.askAsync(Permissions.CONTACTS);
  if (status.permissions.contacts.status === 'granted') {
    const { data } = await Contacts.getContactsAsync();
    if (data.length > 0) {
      const results = [];
      let nextId = id;
      let contactInfo = '';
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].imageAvailable) {
          contactInfo = {
            id: nextId,
            name: data[i].firstName,
            phone: data[i].phoneNumbers[0].number,
            photo: data[i].image.uri,
          };
        } else {
          contactInfo = {
            id: nextId,
            name: data[i].firstName,
            phone: data[i].phoneNumbers[0].number,
            photo: 'https://icon-library.net/images/default-profile-icon/default-profile-icon-16.jpg',
          };
        }
        results.push(addContactFile(nextId, JSON.stringify(contactInfo)));
        nextId += 1;
      }
      await Promise.all(results);
    }
  }
};
