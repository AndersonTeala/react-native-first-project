import React, { Component } from 'react';
import {View, Text, Image} from 'react-native'

class App extends Component{
  render(){

    let nome = 'Retr0';

    return(
      <View>
        <Text>Hello World!</Text>
        <Text>Meu Primeiro App</Text>
        <Text style= {{ color: '#ff5555', fontSize: 25, margin: 15 }}>
          Anderson Teala
          </Text>

      <Text style={{ fontSize: 30 }}> {nome} </Text>

      <Anderson Largura={100} altura={100} fulano="Teala" />

      </View>
    );
  }
}

export default App;

class Anderson extends Component{
  render(){

    let img = 'https://blogatnteala.sentidoconsultoria.com.br/wp-content/uploads/2020/10/image.jpeg';

    return(
      <View>
      <Image 
        source={{ uri: img }}
        style={{ width: this.props.Largura, height: this.props.altura }} 
        />
        <Text> {this.props.fulano} </Text>
      </View>
    );
  }
}
