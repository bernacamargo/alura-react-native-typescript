import React, {useEffect, useState} from 'react';
import {ListRenderItemInfo, View, StatusBar} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import Cabecalho from '../../../src/components/Cabecalho';
import Comentarios from '../../../src/components/Comentarios';
import Foto from '../../../src/components/Foto';
import loadData from '../../../src/services/feed';
import {curtirFoto, imagemDeLike} from '../../services/curtidas';

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadData(setPosts);
  }, []);
  return (
    <ScrollView style={{flexGrow: 1}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{flexGrow: 1}}>
        {posts.length > 0 && (
          <FlatList
            data={posts}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({item}: ListRenderItemInfo<Post>) => (
              <>
                <Cabecalho
                  nomeUsuario={item.userName}
                  urlImage={item.userURL}
                />
                <Foto
                  post={item}
                  curtirFoto={curtirFoto}
                  imagemDeLike={imagemDeLike}
                />
                <Comentarios comentarios={item.comentarios} />
              </>
            )}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default Feed;
