import React from 'react';
// import { Text } from 'react-native';
import ContactPreview from '../../components/ContactPreview';
import {
  getContactById,
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

  async getContact() {
    const contactFound = await getContactById(this.selectedContact);
    return contactFound;
  }

  render() {
    const { selectedContact } = this.state;
    const contactFound = this.getContact();
    return (
      <ContactPreview
        selectedContact={contactFound}
      />
    // add Button added here
    );
  }
}

export default ContactPreviewView;
