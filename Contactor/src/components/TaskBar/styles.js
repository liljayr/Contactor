import { StyleSheet } from 'react-native';
import { purpleish } from '../../styles/colors';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: purpleish,
  },
  toolbarSearch: {
    flex: 1,
    width: 500,
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center',
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});
