import React, { Component } from 'react';
import {View, Text } from 'react-native'

class App extends Component{
render(){
    return(
        <View style={{flex:1, 
                      backgroundColor: '#282a36', 
                      flexDirection: 'row', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                      }}>

            <View style={{width:50, height: 50, backgroundColor: '#f1fa8c'}}></View>

            <View style={{width:50, height: 50, backgroundColor: '#50fa7b'}}></View>

            <View style={{width: 50, height: 50, backgroundColor: '#ff5555'}}></View>

        </View>
      );
    }
  }


export default App;
