import React from 'react';
<<<<<<< HEAD
import { View, FlatList } from 'react-native';
=======
import {
  View, Text, Image, FlatList,
} from 'react-native';
// import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
>>>>>>> 56bd8eef2cb03a66d90b574b1bf95f7fe39e814c
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

<<<<<<< HEAD
=======
const mapStateToProps = (state) => ({
  contacts: state.contacts,
});
>>>>>>> 56bd8eef2cb03a66d90b574b1bf95f7fe39e814c

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
