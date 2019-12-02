import React from 'react';
import { Text } from 'react-native';
import ContactPreview from '../../components/ContactPreview';
import { connect } from 'react-redux';
//import mapStateToProps from

class ContactPreviewView extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const selectedContact = navigation.getParam('selectedContact', -1);
    console.log(selectedContact);
    this.state = {
      selectedContact,
    };
    //console.log(this.state);
  }

  render() {
    const { selectedContact } = this.state;
    return (
      <ContactPreview
      selectedContact={selectedContact}/>
    );
  }
}

export default connect(null, {})(ContactPreviewView);
