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
    this.state = {
      name: '',
      phone: '',
    };
  }

  render() {
    const { name, phone } = this.state;
    const {
      isOpen, closeModal, onSubmit, takePhoto, selectFromCameraRoll, oldName, oldPhone, photo,
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
            onChangeText={(text) => this.setState({ name: text })}
            placeholder={oldName}
            maxLength={29}
            style={defaultStyles.textInput}
            textContentType="name"
          />
          <Text style={defaultStyles.modalTitleText}>
          Phone:
          </Text>
          <TextInput
            onChangeText={(text) => this.setState({ phone: text })}
            placeholder={oldPhone}
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
            onSubmit(name, phone);
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
  oldName: PropTypes.string.isRequired,
  oldPhone: PropTypes.string.isRequired,
};

export default EditContact;
