/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Header from './src/components/Header'
import { View, Text } from 'react-native'
import Post from './src/components/Post'




class App extends React.Component {
  render() {
    const comentarios = [{
      nickname: 'Julia Silva',
      comment: 'Bela Foto'
    }, {
      nickname: 'Bruno Lima', 
      comment: 'Foto Maneira, irmão!'
    }]
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')}
        comments={comentarios}/>
      </View>
    )
  }

};

export default App;
