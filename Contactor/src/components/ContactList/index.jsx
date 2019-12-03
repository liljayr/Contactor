import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import ListItem from '../ContactItem';

const ContactList = ({
  contacts,
  onLongPress,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={contacts}
      renderItem={({
        item: {
          id, name, phone, photo,
        },
      }) => (
        <ListItem
          id={id}
          name={name}
          phone={phone}
          photo={photo}
          onLongPress={onLongPress}
        />
      )}
      keyExtractor={(contact) => contact.id.toString()}
    />
  </View>
);


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  })).isRequired,
  onLongPress: PropTypes.func.isRequired,
};

export default ContactList;
