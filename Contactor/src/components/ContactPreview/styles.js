import { StyleSheet, Dimensions } from 'react-native';
import { purpleish } from '../../styles/colors';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  nameTitle: {
    color: purpleish,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    fontSize: 40,
    textAlign: 'center',
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    position: 'relative',
    alignItems: 'center',
  },
  phoneTitle: {
    flex: 1,
    flexDirection: 'row',
    color: purpleish,
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    height: 100,
    alignItems: 'center',
  },
  image: {
    width: winWidth * 0.45,
    height: winWidth * 0.45,
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 60,
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
