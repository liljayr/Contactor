import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TextInput,
} from 'react-native';
import styles from './styles';

const SearchBar = ({
  onSearch,
}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TextInput
      onChangeText={(text) => onSearch(text)}
      placeholder="Search"
    />
  </View>
);

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
