import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import ListItem from '../ContactItem';

const ContactList = ({
  contacts,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={contacts.sort((a, b) => {
        const x = a.name.toLowerCase();
        const y = b.name.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      })}
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
};

export default ContactList;
