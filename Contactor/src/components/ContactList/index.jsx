import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import ListItem from '../ContactItem';

const ContactList = ({
  contacts,
  search,
  onLongPress,
  selectedContacts,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={contacts.filter((item) => {
        // applying filter for the inserted text in search bar
        const itemData = item.name ? item.name.toString().toUpperCase() : ''.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }).sort((a, b) => {
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
          onLongPress={onLongPress}
          isSelected={selectedContacts.indexOf(id) !== -1}
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
  search: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired,
  selectedContacts: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ContactList;
