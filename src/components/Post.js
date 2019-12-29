import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Author from './Author'

class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={this.props.image}/>
                <Author email="email@email.com" nickname="fulano"/>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        width:Dimensions.get('window').width,
        height: Dimensions.get('window').width*3/4, // dando um formato wide
        resizeMode:'contain'
    }

})

export default Post
