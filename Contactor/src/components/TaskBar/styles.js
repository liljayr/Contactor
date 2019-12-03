import { StyleSheet } from 'react-native';
import { purpleish } from '../../styles/colors';

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
    width: '20%',
    alignItems: 'center',
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});
