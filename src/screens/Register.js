import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Register extends React.Component {
    //estado inicial
    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Nome' style={styles.input}
                    autoFocus={true} value={this.state.name}
                    onChangeText={name => this.setState({ name })} />
                <TextInput placeholder='Email' style={styles.input}
                    keyboardType="email-address" value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                <TextInput placeholder='Password' style={styles.input}
                    secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({ passwords })} />
                <TouchableOpacity onPress={() => { }} style={styles.buttom}>
                    <Text style={StyleSheet.buttomText}>Save</Text>
                </TouchableOpacity>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    } ,
    buttom:{
        marginTop:30,
        padding:10,
        backgroundColor:'#4286f4'
    },
    buttomText:{
        fontSize:20,
        color:'#fff'
    },
    input:{
        marginTop:20,
        width:'90%',
        backgroundColor:'#eee',
        height:40,
        borderWidth:1,
        borderColor:'#333',
        paddingLeft:15
    }

})

export default Register