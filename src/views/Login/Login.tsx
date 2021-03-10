import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import efetuarLogin from '../../services/login';
import estilo from './style';

export default function Login() {
  const [error, setError] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  async function tentarLogar() {
    try {
      await efetuarLogin(usuario, senha);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  }

  return (
    <>
      <View style={estilo.container}>
        <TextInput
          style={estilo.inputs}
          placeholder="Usuário"
          onChangeText={(inputText) => setUsuario(inputText)}
        />
        <TextInput
          style={estilo.inputs}
          placeholder="Senha"
          secureTextEntry
          onChangeText={(inputText) => setSenha(inputText)}
        />
        <Text style={estilo.errorText}>{error}</Text>
      </View>
      <View style={estilo.botaoView}>
        <Button title="Entrar" onPress={tentarLogar} />
      </View>
    </>
  );
}
