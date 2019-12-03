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
  value,
}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <View style={styles.toolbarSearch}>
      <SearchBar
        round
        searchIcon={{ size: 25 }}
        onChangeText={(text) => onSearch(text)}
        onClear={() => onSearch('')}
        placeholder="Type Here..."
        value={value}
      />
    </View>
    <View style={styles.toolbarAction}>
      <TouchableHighlight onPress={onAdd}>
        <Text style={styles.toolbarActionText}>Add</Text>
      </TouchableHighlight>
    </View>
    <View style={styles.toolbarAction}>
      <TouchableHighlight
        onPress={onRemove}
        disable={hasSelected}
      >
        <Text style={styles.toolbarActionText}>delete</Text>
      </TouchableHighlight>
    </View>
  </View>
);

TaskBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  hasSelected: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default TaskBar;

// <TextInput
//   onChangeText={(text) => onSearch(text)}
//   placeholder="Search"
// />
