import React from 'react';
import { View, Alert } from 'react-native';
// import { SearchBar } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import ContactList from '../../components/ContactList';
import TaskBar from '../../components/TaskBar';
import AddModal from '../../components/Modal/AddContact';
import {
  addContactFile,
  getAllContacts,
  remove,
  importAllContacts,
  cleanDirectory,
} from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      selectedContacts: [],
      isAddModalOpen: false,
      photo: '',
      nextId: 1,
      search: '',
    };
  }

  async componentDidMount() {
    await this.fetchItems();
  }

  onContactLongPress(id) {
    const { selectedContacts } = this.state;
    if (selectedContacts.indexOf(id) !== -1) {
      // The image is already within the list
      this.setState({ selectedContacts: selectedContacts.filter((contact) => contact !== id) });
    } else {
      // Add the new image
      this.setState({ selectedContacts: [...selectedContacts, id] });
    }
  }


  async onSearch(searchInput) {
    this.setState({ search: searchInput });
  }

  async deleteSelectedContacts() {
    const { selectedContacts, contacts } = this.state;
    await Promise.all(selectedContacts.map((contact) => remove(contact)));
    this.setState({
      selectedContacts: [],
      contacts: contacts.filter((contact) => selectedContacts.indexOf(contact.id) === -1),
    });
  }

  async fetchItems() {
    const contacts = await getAllContacts();
    this.setState({ contacts });
    if (contacts.length > 0) {
      this.setState({ nextId: contacts[contacts.length - 1].id + 1 });
    }
  }

  async importContacts() {
    const { nextId } = this.state;
    await importAllContacts(nextId);
    await this.fetchItems();
  }

  async clearContacts() {
    await cleanDirectory();
    await this.fetchItems();
  }


  async takePhoto() {
    const photo = await takePhoto();
    if (photo.length > 0) { this.setState({ photo }); }
  }


  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) { this.setState({ photo }); }
  }

  async addContact(name, phone) {
    const { photo, contacts, nextId } = this.state;
    const contactInfo = {
      id: nextId, name, phone, photo,
    };

    // const newContact = `{name: ${name} phone: ${phone} photo: ${photo}}`;
    if (photo === '') {
      Alert.alert(
        'A photo is required!',
        'You can add a photo by selecting the camera or album icon',
      );
    } else {
      const newContact = await addContactFile(nextId, JSON.stringify(contactInfo));
      this.setState({
        isAddModalOpen: false,
        photo: '',
        contacts: [...contacts, newContact],
        nextId: nextId + 1,
      });
    }
  }

  filterContacts(searchTerm) {
    const { contacts } = this.state;
    const filteredContacts = contacts.filter((item) => {
      // applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toString().toUpperCase() : ''.toUpperCase();
      const textData = searchTerm.toUpperCase();
      return itemData.indexOf(textData) > -1;
    }).sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0;
    });
    return filteredContacts;
  }


  render() {
    const {
      isAddModalOpen,
      search,
      selectedContacts,
    } = this.state;
    return (
      <View>
        <NavigationEvents onDidFocus={() => this.fetchItems()} />
        <TaskBar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => this.deleteSelectedContacts()}
          onSearch={(searchInput) => this.onSearch(searchInput)}
          onImport={() => this.importContacts()}
          onClear={() => this.clearContacts()}
          value={search}
          hasSelected={false}
        />

        <ContactList
          contacts={this.filterContacts(search)}
          search={search}
          onLongPress={(id) => this.onContactLongPress(id)}
          selectedContacts={selectedContacts}
        />

        <AddModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          takePhoto={() => this.takePhoto()}
          onSubmit={(name, phone) => this.addContact(name, phone)}
          selectFromCameraRoll={() => this.selectFromCameraRoll()}
        />
      </View>
    );
  }
}

export default Contacts;
