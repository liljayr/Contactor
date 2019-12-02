import React from 'react';
import {
  TouchableHighlight, TextInput, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import defaultStyles from '../../../styles';


class AddListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      image: '',
    };
  }



  render() {
    const { name, phoneNumber, image } = this.state;
    const {
      isOpen, closeModal, onSubmit,
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
            onChangeText={(text) => this.setState({ name: text })}
            placeholder="Conacts phoneNumber"
            maxLength={29}
            style={defaultStyles.textInput}
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
          />
        </View>
        <TouchableHighlight
          style={defaultStyles.button}
          onPress={() => {
            this.setState({
              name: '',
              phoneNumber: '',
              image: '',
            });
            onSubmit(name, phoneNumber, image);
          }}
        >
          <Text style={defaultStyles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}

AddListModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddListModal;
