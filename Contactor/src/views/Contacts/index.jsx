import React from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactList from '../../components/ContactList';
import SearchBar from '../../components/SearchBar';
import AddModal from '../../components/Modal/AddContact';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import { addContact } from '../../actions/contactAction';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddModalOpen: false,
      photo: '',
    };
  }


  async onSearch() {
    const photo = await takePhoto();
    if (photo.length > 0) { this.setState({ photo }); }
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
    const { photo } = this.state;
    const { addContactToState } = this.props;
    if (photo === '') {
      Alert.alert(
        'A photo is is required!',
        'You can add a photo by selecting the camera or album icon',
      );
    } else {
      addContactToState(name, phone, photo);
      this.setState({
        isAddModalOpen: false,
        photo: '',
      });
    }
  }


  render() {
    const {
      isAddModalOpen,
    } = this.state;
    return (
      <View>
        <SearchBar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onSearch={() => this.onSearch()}
        />
        <ContactList />

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
