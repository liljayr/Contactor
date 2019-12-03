import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  nameTitle: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 400,
    textAlign: 'center',
    color:"red",
  },
  nameContainer:{
    flex:1,
    padding: 10,
  },
  phoneTitle:{
    fontSize:20,
  },
  contatiner: {
    flex:1,
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
