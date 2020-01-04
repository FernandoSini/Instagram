import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

class AddPhoto extends React.Component {
    state = {
        image: null, // imagem inicialmente será nula
        comment: '',
    }

    //metodo para pegar a imagem quando ousuário selecionar
    pickImage = () => {
        //passando os parametros do imagePicker   
        ImagePicker.showImagePicker({
            title: 'Escolha uma imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => { // esse callback vai ser chamado quando o usuário selecionar a imagem
            if (!res.didCancel) {
                this.setState({ image :{ uri: res.uri, base64: res.data } }) // o conteúdo da imagem é o base64
            }
        })
    }

    save = async () => {
        Alert.alert('Imagem adicionada!', this.state.comment)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Share your Image</Text>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={this.state.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.buttom} >
                        <Text style={styles.buttomText}>Choose your image</Text>

                    </TouchableOpacity>
                    <TextInput placeholder='Some comments to image?'
                        style={styles.input} value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })} />
                    <TouchableOpacity onPress={this.save} style={styles.buttom}>
                        <Text style={styles.buttomText}>Save</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: "bold"
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width /2,
        backgroundColor:'#eee',
        marginTop: 10
    },
    image: {
        width: '100%', //100% é para pegar prencher a tela do ios totalmente a largura Dimensions.get('window').width,
        height: Dimensions.get('window').width /2,
        resizeMode: 'center'
    },
    buttom: {
        marginTop: 30,
        padding:10,
        backgroundColor: '#4286f4'
    },
    buttomText:{
        fontSize:20,
        color:'#fff'
    },
    input:{
        marginTop:20,
        width:'90%'
    }
})
export default AddPhoto