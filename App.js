/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, Alert } from 'react-native';

export default class primeirornprojeto extends Component {
constructor(props){
  super(props);
  this.state={texto1: 'Texto 1', texto2:'Texto 2'};

  this.escrever = this.escrever.bind(this);
}

mudarvogais(texto){
let novotexto = texto.toLowerCase();
novotexto= novotexto.replace(/(a|e|o|u)/g, 'i');
novotexto= novotexto.replace(/(á|à|â|ã)/g, 'i');
novotexto= novotexto.replace(/(é|è|ê)/g, 'i');
novotexto= novotexto.replace(/(ó|ò|õ|ô)/g, 'i');
novotexto= novotexto.replace(/(ú|ù|û)/g, 'i');
return novotexto
}

escrever(t){
let s = this.state;
s.texto1 = t;
s.texto2 = this.mudarvogais(t);
this.setState(s);
}

  render() {

    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criador de mimi</Text>
        </View>
        <View style={styles.inputarea}>
          <TextInput style={styles.input} placeholder="Digite seu mimi" onChangeText={this.escrever}/>
        </View>
        <View style={styles.area}>
          <Text style={[styles.texto, styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
          <Image style={styles.guri} source={require('./Imagens/miko-hughes.jpg')} />
          <Text style={[styles.texto, styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#999999',
    paddingTop: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  titulo:
  {
    fontSize: 40,
    color: '#FFFFFF'
  },
  texto: {
    fontSize: 25,
    color: '#FFFFFF',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 80
  },
  texto1: {
    zIndex: 1
  },
  texto2: {
    zIndex: 1,
    marginTop: -70
  },

  inputarea: {
    alignSelf: 'stretch'
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    color: '#000000',
    margin: 20,
    padding: 10
  },
  guri: {
    width: 300,
    height: 300,
    marginTop: -70
  },
  area: {
    width: 300,
    height: 300,
    marginTop: 10
  }

})
