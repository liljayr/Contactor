import { StyleSheet } from 'react-native';
import { purpleish, pinkish } from '../../styles/colors';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    backgroundColor: purpleish,
  },
  toolbarSearch: {
    width: '60%',
    height: 60,
  },
  toolbarAction: {
    margin: 2,
    flex: 1,
    alignItems: 'center',
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});
