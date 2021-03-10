import React from 'react';
import {Image, Text, View} from 'react-native';
import estilo from './style';

interface Props {
  nomeUsuario: string;
  urlImage: string;
}

export default function Cabecalho(props: Props) {
  const {nomeUsuario, urlImage} = props;
  return (
    <View style={estilo.cabecalho}>
      <Image source={{uri: urlImage}} style={estilo.fotoUsuario} />
      <Text>{nomeUsuario}</Text>
    </View>
  );
}
