import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    margin: 22,
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
  thumbnail: {
    width: 51,
    height: 51,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 10,
    resizeMode: 'cover',
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: 0.5,
  },
});
