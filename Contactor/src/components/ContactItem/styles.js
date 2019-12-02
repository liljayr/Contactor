import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  title: {
    marginLeft: 10,
    marginRight: 10,
  },
  contatiner: {
    height: 100,
  },
  image: {
    width: winWidth * 0.45,
    height: winWidth * 0.45,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: 'row',
  },
});
