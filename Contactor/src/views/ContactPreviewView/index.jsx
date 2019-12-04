import React from 'react';
import {
  TouchableOpacity, View, Text, Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import Call from 'react-native-phone-call';
import ContactPreview from '../../components/ContactPreview';

import {
  getContactById, editContactFile,
} from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import EditModal from '../../components/Modal/EditContact';
// import mapStateToProps from

class ContactPreviewView extends React.Component {
  static makeCall(number) {
    // handler to make a call
    const args = {
      number,
      prompt: false,
    };
    Call(args).catch(console.error());
  }

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const selectedContact = navigation.getParam('selectedContact', -1);
    this.state = {
      selectedContact,
      contactFound: {},
      isEditModalOpen: false,
      photo: '',
    };
  }

  async componentDidMount() {
    await this.getContact();
  }

  async getContact() {
    const { selectedContact } = this.state;
    const contactFound = await getContactById(selectedContact);
    this.setState({ contactFound });
  }

  async editContact(id, name, phone) {
    const { photo } = this.state;
    const contactInfo = {
      id, name, phone, photo,
    };

    if (photo === '') {
      Alert.alert(
        'A photo is required!',
        'You can add a photo by selecting the camera or album icon',
      );
    } else {
      const contactFound = await editContactFile(id, JSON.stringify(contactInfo));
      this.setState({
        isEditModalOpen: false,
        contactFound,
      });
    }
  }

  async takePhoto() {
    const photo = await takePhoto();
    if (photo.length > 0) { this.setState({ photo }); }
  }

  async selectFromCameraRoll() {
    const photo = await selectFromCameraRoll();
    if (photo.length > 0) { this.setState({ photo }); }
  }


  render() {
    const { contactFound, isEditModalOpen } = this.state;
    return (
      <View>
        <ContactPreview
          name={contactFound.name}
          phone={contactFound.phone}
          photo={contactFound.photo}
        />
        <TouchableOpacity
          onPress={() => ContactPreviewView.makeCall(contactFound.phone)}
        >
          <Text>
            Call
            {contactFound.phone}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({ isEditModalOpen: true })}
        >
          <Text>Edit</Text>
          <EditModal
            isOpen={isEditModalOpen}
            closeModal={() => this.setState({ isEditModalOpen: false })}
            takePhoto={() => this.takePhoto()}
            onSubmit={(id, name, phone) => this.editContact(id, name, phone)}
            selectFromCameraRoll={() => this.selectFromCameraRoll()}
            oldId={contactFound.id}
            oldName={contactFound.name}
            oldPhone={contactFound.phone}
            oldPhoto={contactFound.photo}
          />
        </TouchableOpacity>
      </View>
    // add Button added here
    );
  }
}

ContactPreviewView.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};


export default ContactPreviewView;
