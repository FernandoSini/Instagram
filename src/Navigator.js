import React from 'react'
import {
    createBottomTabNavigator,
} from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createSwitchNavigator, } from 'react-navigation'
import { createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'
import Login from './screens/Login'
import Register from './screens/Register'

//criando o objeto de rota de autenticação
const authRouter = createStackNavigator({
    Login: { screen: Login, navigationOptions: { title: 'login' } },
    Register: { screen: Register, navigationOptions: { title: 'Register' } }
}, {
    initialRouteName:'Login'
})

const loginOrProfileRouter = createSwitchNavigator({
    //fazendo a troca das telas
    Profile: Profile,
    Auth: authRouter
}, {
    initialRouteName: 'Profile'
})

const MenuRoutes = {

    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) =>
                <Icon name="home" size={30} color={tintColor} />
        }
    },

    Add: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) =>
                <Icon name="camera" size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: loginOrProfileRouter,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor: color }) =>
                <Icon name="user" size={30} color={color} />
        }
    }
}

const menuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false,// mostrar só icones

    }
}
const MenuNavigator = createAppContainer(createBottomTabNavigator(MenuRoutes, menuConfig)) //recebe as rotas e a configuração como parametros
export default MenuNavigator