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
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: photo }}
      />
    </View>
    <View>
      <Text style={styles.nameTitle}>{name}</Text>
    </View>
    <View style={styles.nameContainer}>
      <Text style={styles.phoneTitle}>{phone}</Text>
    </View>
    <View>
      <Text>Edit button here!</Text>
    </View>
  </View>
);
ContactPreviewItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default withNavigation(ContactPreviewItem);
