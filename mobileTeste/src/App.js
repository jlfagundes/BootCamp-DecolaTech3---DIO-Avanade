import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking, // api do react Ntive
} from 'react-native';

const coloGitHub = '#010409';
const coloFont = '#C9D1D9';
const coloFontDark = '#4F565E';
const imageProfile = 'https://avatars.githubusercontent.com/u/69995096?v=4';
const urlGitHub = 'https://github.com/jlfagundes';

const App = () => {
  const handlePressButton = async () => {
    console.log('verificando link');
    const response = await Linking.canOpenURL(urlGitHub); // tenta abrir url e retorna true ou false
    if (response) {
      console.log('link aprovado');
      console.log('abrindo link...');
      Linking.openURL(urlGitHub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={coloGitHub} barStyle="light-content" />
      <View style={style.content}>
        <Image style={style.avatar} source={{uri: imageProfile}} />
        <Text
          accessibilityLabel="Nome: José Luiz Fagundes"
          style={[style.defaultText, style.name]}>
          José Luiz Fagundes
        </Text>
        <Text
          accessibilityLabel="Nickname: jlfagundes"
          style={[style.defaultText, style.nickname]}>
          jlfagundes
        </Text>
        <Text
          accessibilityLabel="Descrição: Estudante de Desenvolvimento de Software | Trybe"
          style={style.defaultText}>
          Estudante de Desenvolvimento de Software | Trybe
        </Text>
        {/* componente que permite clicar no texto, transformando em botao */}
        <Pressable onPress={handlePressButton}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Abrir no GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

/*
--- Paleta de Cores ---
--yale-blue: #054a91ff;
--steel-blue: #3e7cb1ff;
--iceberg: #81a4cdff;
--alice-blue: #dbe4eeff;
--safety-orange: #f17300ff;
*/
const style = StyleSheet.create({
  container: {
    backgroundColor: coloGitHub,
    flex: 1, // aumenta a <View> para preencher toda a tela
  },
  content: {
    alignItems: 'center',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: coloFont,
  },
  name: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 15,
    color: coloFontDark,
  },
  desciption: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  button: {
    backgroundColor: coloFontDark,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
});
