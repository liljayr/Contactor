import React from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { SearchBar } from 'react-native-elements';
import ContactList from '../../components/ContactList';
import SearchBar from '../../components/SearchBar';
import AddModal from '../../components/Modal/AddContact';
import { addContactFile, getAllContacts } from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import { addContact } from '../../actions/contactAction';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isAddModalOpen: false,
      photo: '',
      nextId: 1,
      search: '',
    };
  }

  async componentDidMount() {
    await this.fetchItems();
  }


  async onSearch(searchInput) {
    this.setState({ search: searchInput });
  }

  async fetchItems() {
    const contacts = await getAllContacts();
    this.setState({ contacts });
    if (contacts.length > 0) this.setState({ nextId: contacts[contacts.length - 1].id + 1 });
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
    const { addContactToState } = this.props;
    const contactInfo = {
      id: nextId, name, phone, photo,
    };

    // const newContact = `{name: ${name} phone: ${phone} photo: ${photo}}`;
    if (photo === '') {
      Alert.alert(
        'A photo is is required!',
        'You can add a photo by selecting the camera or album icon',
      );
    } else {
      const newContact = await addContactFile(nextId, JSON.stringify(contactInfo));
      addContactToState(name, phone, photo);
      this.setState({
        isAddModalOpen: false,
        photo: '',
        contacts: [...contacts, newContact],
        nextId: nextId + 1,
      });
    }
  }


  render() {
    const {
      isAddModalOpen,
      contacts,
      search,
    } = this.state;
    return (
      <View>
        <SearchBar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onSearch={(searchInput) => this.onSearch(searchInput)}
        />
        <ContactList
          search={search}
        />

        <ContactList
          contacts={contacts}
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

Contacts.propTypes = {
  addContactToState: PropTypes.func.isRequired,
};

export default connect(null, {
  addContactToState: addContact,
})(Contacts);
