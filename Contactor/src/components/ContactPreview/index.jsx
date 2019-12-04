import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ContactPreview = ({
  name, phone, photo,
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
  </View>
);

ContactPreview.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  photo: PropTypes.string,
};

ContactPreview.defaultProps = {
  name: '',
  phone: '',
  photo: 'https://icon-library.net/images/default-profile-icon/default-profile-icon-16.jpg',
};

export default ContactPreview;
