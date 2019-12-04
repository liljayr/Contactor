import React from 'react';
import {
  TouchableHighlight,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import Modal from '../Modal';
import defaultStyles from '../../../styles';
import styles from './styles';


class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const {
      id, name, phone, photo,
    } = props;
    this.state = {
      id,
      name,
      phone,
      photo,
    };
  }

  render() {
    const {
      id, name, phone, photo,
    } = this.state;
    const {
      isOpen, closeModal, onSubmit, takePhoto, selectFromCameraRoll,
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <View>
          <Text style={defaultStyles.modalTitleText}>
          Name:
          </Text>
          <TextInput
            value={name}
            onChangeText={(text) => this.setState({ name: text })}
            maxLength={29}
            style={defaultStyles.textInput}
            textContentType="name"
          />
          <Text style={defaultStyles.modalTitleText}>
          Phone:
          </Text>
          <TextInput
            value={phone}
            onChangeText={(text) => this.setState({ phone: text })}
            maxLength={29}
            style={defaultStyles.textInput}
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
          />
        </View>
        <View>
          <Image source={{ uri: photo }} />
        </View>
        <View
          style={styles.icons}
        >
          <TouchableOpacity onPress={() => takePhoto()}>
            <Entypo style={styles.icon} name="camera" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectFromCameraRoll()}>
            <Entypo style={styles.icon} name="image" />
          </TouchableOpacity>
        </View>
        <TouchableHighlight
          style={defaultStyles.button}
          onPress={() => {
            this.setState({
              name: '',
              phone: '',
            });
            onSubmit(id, name, phone, photo);
          }}
        >
          <Text style={defaultStyles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}

EditContact.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  takePhoto: PropTypes.func.isRequired,
  selectFromCameraRoll: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default EditContact;
