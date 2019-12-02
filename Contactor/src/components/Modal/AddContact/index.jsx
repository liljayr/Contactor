import React from 'react';
import {
  TouchableHighlight,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';
import Modal from '../Modal';
import defaultStyles from '../../../styles';
import styles from './styles';


class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
    };
  }

  render() {
    const { name, phoneNumber } = this.state;
    const {
      isOpen, closeModal, onSubmit, takePhoto, selectFromCameraRoll,
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <Text style={defaultStyles.modalTitleText}>
          Enter the desired title for this list
        </Text>
        <View>
          <TextInput
            onChangeText={(text) => this.setState({ name: text })}
            placeholder="Contacts name"
            maxLength={29}
            style={defaultStyles.textInput}
            textContentType="name"
          />
          <TextInput
            onChangeText={(text) => this.setState({ phoneNumber: text })}
            placeholder="Conacts phoneNumber"
            maxLength={29}
            style={defaultStyles.textInput}
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
          />
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
              phoneNumber: '',
            });
            onSubmit(name, phoneNumber);
          }}
        >
          <Text style={defaultStyles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}

AddContact.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  takePhoto: PropTypes.func.isRequired,
  selectFromCameraRoll: PropTypes.func.isRequired,
};

export default AddContact;
