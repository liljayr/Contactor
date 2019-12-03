import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableHighlight, Text,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './styles';

const TaskBar = ({
  onSearch,
  onAdd,
  onRemove,
  hasSelected,
}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <SearchBar
      style={styles.toolbarSearch}
      round
      searchIcon={{ size: 24 }}
      onChangeText={(text) => onSearch(text)}
      onClear={() => onSearch('')}
      placeholder="Type Here..."
    />
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onAdd}
    >
      <Text style={styles.toolbarActionText}>Add</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={styles.toolbarAction}
      onPress={onRemove}
      disable={hasSelected}
    >
      <Text style={styles.toolbarActionText}>delete</Text>
    </TouchableHighlight>
  </View>
);

TaskBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  hasSelected: PropTypes.bool.isRequired,
};

export default TaskBar;

// <TextInput
//   onChangeText={(text) => onSearch(text)}
//   placeholder="Search"
// />
