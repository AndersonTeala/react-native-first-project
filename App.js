import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, StatusBar, Button } from 'react-native'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    if(this.state.input === ''){
      alert('Digite seu nome!');
      return;
    }

    this.setState({nome: 'Bem vindo: ' + this.state.input})
  }

render(){
    return(

      <>

      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

        <View style={styles.container}>

          < TextInput style={styles.input} 
          placeholder="Digite seu nome:" 
          underlineColorAndroid="transparent"
          onChangeText={ (texto) => this.setState({input: texto}) }
           />

           <Button title="Entrar" onPress={this.entrar} />

          <Text style={styles.texto}>{this.state.nome}</Text>

        </View>
      </>

      );
    }
  }


  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#282a36',
      color: '#f8f8f2'
    },
    input:{
      backgroundColor: '#fff',
      color: '#282a36',
      height: 45,
      borderWidth: 1,
      borderColor: '#7159c1',
      margin: 100,
      fontSize: 20,
      padding: 10,
    },
    texto:{
      color: '#50fa7b',
      textAlign: 'center',
      fontSize: 30
    },

  });


export default App;
