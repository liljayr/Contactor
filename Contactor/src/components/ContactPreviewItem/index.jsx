import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ContactPreviewItem = ({
  id, name, phone, photo, navigation: { navigate },
}) => (
  <View style={styles.itemContainer}>
    <View>
      <Text style={backgroundColor:'red'}>{id}</Text>
    </View>
    <View style={styles.nameContainer}>
      <Text style={styles.phoneTitle}>{name}</Text>
    </View>
    <View>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: photo }}
      />
    </View>
  </View>
);
ContactItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default withNavigation(ContactItem);
