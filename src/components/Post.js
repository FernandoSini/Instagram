import React from 'react'
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Author from './Author'
import Comment from './Comment'
import AddComment from './AddComment';

class Post extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={this.props.image}/>
                <Author email={this.props.email} nickname={this.props.nickname}/>
                <Comment comments={this.props.comments}/>
                <AddComment/>
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
