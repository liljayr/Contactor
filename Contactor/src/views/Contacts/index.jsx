import React from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { SearchBar } from 'react-native-elements';
import ContactList from '../../components/ContactList';
import TaskBar from '../../components/TaskBar';
import AddModal from '../../components/Modal/AddContact';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import { addContact } from '../../actions/contactAction';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddModalOpen: false,
      photo: '',
      search: '',
    };
  }


  async onSearch(searchInput) {
    this.setState({ search: searchInput });
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
      isAddModalOpen, search,
    } = this.state;
    return (
      <View>
        <TaskBar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onRemove={() => this.setState({ isAddModalOpen: true })}
          onSearch={(searchInput) => this.onSearch(searchInput)}
          hasSelected={false}
        />
        <ContactList
          search={search}
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
