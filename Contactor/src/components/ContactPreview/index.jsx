import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import PreviewItem from '../ContactPreviewItem';

const ContactPreview = ({
  contactFound,
}) => (
  <View>
    <FlatList
      numColumns={1}
      data={contactFound}
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
  contactFound: PropTypes.string.isRequired,
};

export default ContactPreview;
