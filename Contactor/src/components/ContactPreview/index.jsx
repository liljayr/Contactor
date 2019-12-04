import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ContactPreview = ({
  name, phone, photo,
}) => (
  <View>
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

ContactPreview.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default ContactPreview;
