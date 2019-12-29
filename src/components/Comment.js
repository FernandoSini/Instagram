import React from 'react'
import { View, Text, StyleSheet, Dimensions, Alert } from 'react-native'


class Comment extends React.Component {
    render() {

        let view = null
        if (this.props.comments) {

            view = this.props.comments.map((item, index) => {
                //dentro do return o key será necessário para atualizar no for os comentarios e aquilo que for necessario
                // ou seja está transformando os objetos que tem nickname e comments em jsx
                return (
                    <View style={styles.commentsContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname}:</Text>
                        <Text style={styles.comments}>{item.comment}</Text>

                    </View>

                )

            })
        }

        return (
            //view que irá envolver os componentes
            //a view entre chaves irá pegar todos os comentarios gerados e jogar dentro da view que representa os componentes
            <View style={styles.container}>
                {view}

            </View>

        )

    }
}
const styles = StyleSheet.creat({
    container: {
        flex: 1,
        margin: 10
    },
    commentsContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    comments: {
        marginLeft:5,
        color: '#555'
    }

})

export default Comment