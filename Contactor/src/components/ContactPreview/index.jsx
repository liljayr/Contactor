import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import PreviewItem from '../ContactPreviewItem';

const ContactPreview = ({
  selectedContact, contacts,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={contacts.filter((contact) => contact.id === selectedContact)}
      renderItem={({
        item: {
          id, name, phone, photo,
        },
      }) => (
        <PreviewItem
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


ContactPreview.propTypes = {
  selectedContact: PropTypes.number.isRequired,
};

ContactPreview.propTypes = {
  selectedContact: PropTypes.number.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  })).isRequired,
};

export default ContactPreview;
