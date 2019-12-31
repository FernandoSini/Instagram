import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends React.Component {
    // criando os posts dentro de state, mock dos posts
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Maria Julia luiza',
            email: 'mjl@email.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Paulo fernando',
                comment: 'maneiro!'
            }, {
                nickname: 'Luiza magali',
                comment: 'Foto Linda!'
            }]
        }, {
            id: Math.random(),
            nickname: 'Lucas Navalha Vinicius',
            email: 'Lnv@email.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList 
                        data={this.state.posts}
                        keyExtractor={item =>`${item.id}`}
                        renderItem={({item})=> 
                            <Post key={item.id} {...item}/>}/> 
            </View>
                
            )
        }
    }
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff'
    } 
})
    
export default Feed