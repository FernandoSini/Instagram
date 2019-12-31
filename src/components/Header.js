import React, { Component } from 'react'

import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import icon from '../../assets/imgs/icon.png'


class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image style={styles.image} source={icon} />
                    <Text style={styles.title}>Instagram</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "ios" ? 20 : 0,
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#bbb',
        width: '100%',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 35,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: 'Mountain',
        height:39,
        fontSize:24,
        marginLeft:10
    }
})

export default Header;