import React from 'react';
// import { Text } from 'react-native';
import ContactPreview from '../../components/ContactPreview';
import {
  getContactById, loadContact, getAllContacts,
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
      contactFound: {},
    };
    // console.log(this.state);
  }

  async componentDidMount() {
    await this.getContact();
    // console.log('hellllo');
  }

  async getContact() {
    const { selectedContact } = this.state;
    // console.log(selectedContact);
    const contactFound = await getContactById(selectedContact);
    this.setState({ contactFound });
    // console.log(contactFound);
  }

  render() {
    const { selectedContact, contactFound } = this.state;
    console.log(contactFound);
    // const contactInfo =;
    // const contactInfo = console.log(typeof (contactFound));
    // console.log(contactInfo);
    // console.log(typeof (contactInfo));
    // console.log(selectedContact);
    return (
      <ContactPreview
        name={contactFound.name}
        phone={contactFound.phone}
        photo={contactFound.photo}
      />
    // add Button added here
    );
  }
}

export default ContactPreviewView;
