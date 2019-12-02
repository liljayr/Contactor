import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ContactItem = ({
  id, name, phone, photo,
}) => (
  <View style={styles.itemContainer}>
    <Text style={styles.title}>{id}</Text>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.title}>{phone}</Text>
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
};
export default ContactItem;
