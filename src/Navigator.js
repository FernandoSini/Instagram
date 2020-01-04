import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'



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
            screen: Feed,
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