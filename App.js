import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, StatusBar } from 'react-native'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };

    this.pegaNome = this.pegaNome.bind(this);
  }

  pegaNome(texto){
    if(texto.length > 0){
      this.setState({nome: 'Bem vindo: ' + texto});
    }else{
      this.setState({nome: ''})
    }
  }

render(){
    return(

      <>

      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

        <View style={styles.container}>

          < TextInput style={styles.input} 
          placeholder="Digite seu nome:" 
          underlineColorAndroid="transparent"
          onChangeText={this.pegaNome}
           />

          <Text style={styles.texto}>{this.state.nome}</Text>

        </View>
      </>

      );
    }
  }


  const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    input:{
      height: 45,
      borderWidth: 1,
      borderColor: '#222',
      margin: 10,
      fontSize: 20,
      padding: 10,
    },
    texto:{
      textAlign: 'center',
      fontSize: 25
    },

  });


export default App;
