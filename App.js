import React, { Component } from 'react';
import {View, Text, Button, StatusBar } from 'react-native'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(nome){
    this.setState({
      nome: nome
    })
  }

  render(){
    return(
        <View style={{ marginTop: 120}}>

          <Button title="Entrar" onPress={ () => this.entrar('Alterar Texto')} />

          <Text style={{ fontSize: 23, color: '#50fa7b', textAlign: 'center' }}> 
            {this.state.nome}
          </Text>
        </View>
      );
    }
  }

export default App;
