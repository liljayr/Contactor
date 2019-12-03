import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  nameTitle: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 40,
    textAlign: 'center',
  },
  nameContainer:{
    flex:1,
    padding: 10,
    position: 'relative',
  },
  phoneTitle:{
    fontSize:20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    height: 100,
  },
  image: {
    width: winWidth * 0.45,
    height: winWidth * 0.45,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 60,
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
