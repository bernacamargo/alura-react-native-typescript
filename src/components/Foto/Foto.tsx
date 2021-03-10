import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const imagem = require('../../../res/img/alura.jpg');

interface Props {
  post: Post;
  curtirFoto: Function;
  imagemDeLike: Function;
}

export default function Foto(props: Props) {
  const {post, imagemDeLike, curtirFoto} = props;
  const [curtiu, setCurtiu] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleCurtirFoto = () => {
    const [novoCurtiu, qtdLikes] = curtirFoto(curtiu, likes);
    setLikes(qtdLikes);
    setCurtiu(novoCurtiu);
  };

  return (
    <>
      <Image source={{uri: post.url}} style={style.imagem} />
      <Text style={style.descricao}>{post.description}</Text>
      <View style={style.viewLike}>
        <TouchableOpacity onPress={handleCurtirFoto}>
          <Image style={style.like} source={imagemDeLike(curtiu)} />
        </TouchableOpacity>
        <Text>{likes}</Text>
      </View>
    </>
  );
}
