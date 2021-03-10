import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import SendImgSrc from '../../../res/img/send.png';
import criaComentario from '../../services/comentarios';
import {style} from './style';

interface Props {
  comentarios: Comentario[];
}

export default function Comentarios(props: Props) {
  const {comentarios} = props;
  const [listaComentarios, setListaComentarios] = useState(comentarios);
  const [novoComentario, setNovoComentario] = useState<string>('');
  let inputRef = useRef(null);

  function adicionaComentario() {
    setListaComentarios((oldLista) => {
      let newLista = oldLista;
      const newComentario: Comentario = criaComentario(novoComentario, 'Berna');

      newLista = [...newLista, newComentario];

      return newLista;
    });

    limpaInputComentario(inputRef);
  }

  function limpaInputComentario(inputRef: React.MutableRefObject<null>) {
    inputRef.current !== null && inputRef.current?.clear();
    setNovoComentario('');
  }

  return (
    <View>
      <FlatList
        data={listaComentarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}: ListRenderItemInfo<Comentario>) => (
          <View style={style.comentario}>
            <Text>{item.userName} </Text>
            <Text> {item.text}</Text>
          </View>
        )}
      />
      <View style={style.escreverComentario}>
        <TextInput
          ref={inputRef}
          style={style.escreverComentarioInput}
          placeholder="Deixe seu comentário"
          onChangeText={(event) => setNovoComentario(event)}
        />
        <TouchableOpacity onPress={() => adicionaComentario()}>
          <Image style={style.escreverComentarioIcone} source={SendImgSrc} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
