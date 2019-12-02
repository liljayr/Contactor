import React from 'react';
import { View, Text, Image, FlatList} from 'react-native';
//import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ContactPreview = ({
  selectedContact, contacts, contactInfo,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={contacts.filter((contact) => contact.id === selectedContact)}
      renderItem = {({item: {
        id, name, phone, photo
      }}) => (
        <View>
        <Text>{name}</Text>
        <Text>{phone}</Text>
        </View>
      )}
      keyExtractor={(contact) => contact.id.toString()}
    />
  </View>
);

const mapStateToProps = (state) => ({
  contacts: state.contacts
});

ContactPreview.propTypes = {
  selectedContact:PropTypes.string.isRequired,
}

/*ContactPreview.propTypes = {
  id:PropTypes.number.isRequired,
  name:PropTypes.string.isRequired,
  photo:PropTypes.string.isRequired,
  phone:PropTypes.string.isRequired,
};*/

export default connect(mapStateToProps)(ContactPreview);
