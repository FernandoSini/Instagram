import React from 'react'

import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback as TWF, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class AddComment extends React.Component {
    state = {
        comment: '',
        editMode: false //alternando entre exibição e edição de comentarios
    }
    handleAddCOmment = () => {
        Alert.alert('Adicionado', this.state.comment)
    }
    render() {
        let commentArea = null
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder="pode comentar..."
                        style={styles.input} autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        onSubmitEditing={this.handleAddCOmment} />
                    <TWF onPress={() => this.setState({ editMode: false })}>
                        <Icon name='times' size={15} color='#555' />
                    </TWF>
                </View>

            )
        } else {
            commentArea = (
                <TWF onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name='comment-o' size={25} color='#555' />
                        <Text style={styles.caption}>
                            adicione um comentário...
                            </Text>
                    </View>
                </TWF>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                {commentArea}
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    caption:{
        marginLeft:10,
        fontSize:12,
        color:'#ccc'
    },
    input:{
        width:'90%'
    }
})
export default AddComment