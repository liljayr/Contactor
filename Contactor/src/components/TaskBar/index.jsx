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
  onImport,
  onClear,
  hasSelected,
  value,
}) => (
  <View styleName="horizontal" style={styles.toolbar}>
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
        <Text style={styles.toolbarActionText}>Delete</Text>
      </TouchableHighlight>
    </View>
    <View style={styles.toolbarAction}>
      <TouchableHighlight
        onPress={onImport}
        disable={hasSelected}
      >
        <Text style={styles.toolbarActionText}>onImport</Text>
      </TouchableHighlight>
    </View>
    <View style={styles.toolbarAction}>
      <TouchableHighlight
        onPress={onClear}
        disable={hasSelected}
      >
        <Text style={styles.toolbarActionText}>onClear</Text>
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
