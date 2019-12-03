import React from 'react';
// import { Text } from 'react-native';
import ContactPreview from '../../components/ContactPreview';
import {
  addContactFile, getAllContacts, remove, importAllContacts,
} from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
// import mapStateToProps from

class ContactPreviewView extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const selectedContact = navigation.getParam('selectedContact', -1);
    this.state = {
      selectedContact,
    };
    // console.log(this.state);
  }

  render() {
    const { selectedContact } = this.state;
    return (
      <ContactPreview
        selectedContact={selectedContact, []}
      />
    // add Button added here
    );
  }
}

export default ContactPreviewView;
