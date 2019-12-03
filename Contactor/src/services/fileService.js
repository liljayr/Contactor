import * as FileSystem from 'expo-file-system';

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
  return Promise.all(result.map(async (fileName) => (JSON.parse(await loadContact(fileName)))));
};
