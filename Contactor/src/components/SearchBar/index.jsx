import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TextInput, TouchableHighlight, Text,
} from 'react-native';
import styles from './styles';

const SearchBar = ({
  onSearch,
  onAdd,
}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableHighlight style={styles.toolbarAction} onPress={onAdd}>
      <Text style={styles.toolbarActionText}>Add</Text>
    </TouchableHighlight>
    <TextInput
      onChangeText={(text) => onSearch(text)}
      placeholder="Search"
    />
  </View>
);

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default SearchBar;
