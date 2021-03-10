import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get('screen').width;
const estilo = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    width: largura * 0.8,
    fontSize: 30,
    textAlign: 'center',
  },
  botaoView: {
    alignItems: 'center',
    marginBottom: 50,
  },
  errorText: {
    color: 'red',
  },
});

export default estilo;
