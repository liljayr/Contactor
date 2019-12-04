import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import ContactPreview from '../../components/ContactPreview';
import {
  getContactById, addContactFile,
} from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import EditModal from '../../components/Modal/EditContact';
// import mapStateToProps from

class ContactPreviewView extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const selectedContact = navigation.getParam('selectedContact', -1);
    this.state = {
      selectedContact,
      contactFound: {},
      isEditModalOpen: false,
    };
    // console.log(this.state);
  }

  async componentDidMount() {
    await this.getContact();
    // console.log('hellllo');
  }

  async getContact() {
    const { selectedContact } = this.state;
    const contactFound = await getContactById(selectedContact);
    this.setState({ contactFound });
  }

  async editContact(id, name, phone, photo) {
    let { contactFound } = this;
    const contactInfo = {
      id, name, phone, photo,
    };

    if (photo === '') {
      Alert.alert(
        'A photo is required!',
        'You can add a photo by selecting the camera or album icon',
      );
    } else {
      contactFound = await addContactFile(id, JSON.stringify(contactInfo));
      this.setState({
        isEditModalOpen: false,

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
    const { selectedContact, contactFound, isEditModalOpen } = this.state;
    return (
      <View>
        <ContactPreview
          name={contactFound.name}
          phone={contactFound.phone}
          photo={contactFound.photo}
        />
        <TouchableOpacity
          onPress={() => this.setState({ isEditModalOpen: true })}
        >
          <Text>Edit</Text>
          <EditModal
            isOpen={isEditModalOpen}
            closeModal={() => this.setState({ isEditModalOpen: false })}
            takePhoto={() => this.takePhoto()}
            onSubmit={(id, name, phone, photo) => this.editContact(id, name, phone, photo)}
            selectFromCameraRoll={() => this.selectFromCameraRoll()}
            id={contactFound.id}
            name={contactFound.name}
            phone={contactFound.phone}
            photo={contactFound.photo}
          />
        </TouchableOpacity>
      </View>
    // add Button added here
    );
  }
}

export default ContactPreviewView;
