import {Dimensions, StyleSheet} from 'react-native';

const largura = Dimensions.get('screen').width;
const style = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura,
  },
  descricao: {
    margin: 10,
  },
  like: {
    width: 40,
    height: 40,
    margin: 5,
  },
  viewLike: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default style;
