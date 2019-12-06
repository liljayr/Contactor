import { StyleSheet } from 'react-native';
import { purpleish } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
  },
  phoneTitle: {
    color: purpleish,
    fontSize: 20,
    textAlign: 'center',
  },
  editButton: {
    color: purpleish,
    padding: 20,
  },
});
