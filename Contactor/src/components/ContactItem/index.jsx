import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ContactItem = ({
  id, name, photo, onLongPress, navigation: { navigate },
}) => (
  <TouchableOpacity
    onLongPress={() => onLongPress(id)}
    onPress={() => navigate('ContactPreviewView', { selectedContact: id })}
  >
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{name}</Text>
      <View>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: photo }}
        />
      </View>
    </View>
  </TouchableOpacity>
);
ContactItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default withNavigation(ContactItem);
