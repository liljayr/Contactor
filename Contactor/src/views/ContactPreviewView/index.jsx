import React from 'react';
import { View, Button } from 'react-native';
import Call from 'react-native-phone-call';
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

  makeCall() {
    // handler to make a call
    // TODO: Needs access to the currentylu opne client to call that number
    const args = {
      number: '0000000000',
      prompt: false,
    };
    Call(args).catch(console.error);
  };

  render() {
    const { selectedContact } = this.state;
    return (
      <View>
        <ContactPreview
          selectedContact={selectedContact, []}
        />
        <Button title="Make a Call" onPress={this.call} />
      </View>
    );
  }
}

export default ContactPreviewView;
