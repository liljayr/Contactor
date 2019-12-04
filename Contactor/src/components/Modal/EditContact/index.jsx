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
    const {
      name, phone,
    } = this.state;
    const {
      isOpen,
      closeModal,
      onSubmit,
      takePhoto,
      selectFromCameraRoll,
      oldId,
      oldName,
      oldPhone,
      oldPhoto,
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
            value={oldName}
            onChangeText={(text) => this.setState({ name: text })}
            maxLength={29}
            style={defaultStyles.textInput}
            textContentType="name"
          />
          <Text style={defaultStyles.modalTitleText}>
          Phone:
          </Text>
          <TextInput
            value={oldPhone}
            onChangeText={(text) => this.setState({ phone: text })}
            maxLength={29}
            style={defaultStyles.textInput}
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
          />
        </View>
        <View>
          <Image source={{ uri: oldPhoto }} />
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
            onSubmit(oldId, name, phone);
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
  oldId: PropTypes.number.isRequired,
  oldName: PropTypes.string.isRequired,
  oldPhone: PropTypes.string.isRequired,
  oldPhoto: PropTypes.string.isRequired,
};

export default EditContact;
