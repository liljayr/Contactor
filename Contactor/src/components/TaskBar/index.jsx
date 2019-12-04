import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableHighlight, Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

const TaskBar = ({
  onSearch,
  onAdd,
  onRemove,
  onImport,
  onClear,
  hasSelected,
}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <View style={styles.toolbarAction}>
      <Button
        titleStyle={styles.toolbarActionText}
        title="Add"
        type="clear"
        onPress={onAdd}
      />
    </View>
    <View style={styles.toolbarAction}>
      <Button
        titleStyle={styles.toolbarActionText}
        title="Remove"
        type="clear"
        onPress={onRemove}
      />
    </View>
    <View style={styles.toolbarAction}>
      <Button
        titleStyle={styles.toolbarActionText}
        title="Clear"
        type="clear"
        onPress={onClear}
      />
    </View>
    <View style={styles.toolbarAction}>
      <Button
        titleStyle={styles.toolbarActionText}
        title="Import"
        type="clear"
        onPress={onImport}
      />
    </View>
  </View>
);

TaskBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  hasSelected: PropTypes.bool.isRequired,
};

export default TaskBar;
