import React from 'react';
import { Provider } from 'react-redux'
import { createStackNavigator,
         createBottomTabNavigator,
         createDrawerNavigator } from 'react-navigation'
//import { reducer } from 'reducer'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { Constants } from 'expo'
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
 } from 'react-native'
 import DeckList from './components/DeckList'
 import { _storeData,getDecks } from './utils/api'




 function MainNavBar  ({ navigation }) {
  return(
    <View style={{height:50, backgroundColor:'powderblue'}}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <MaterialIcons name='menu' size={50} color="blue"/>
      </TouchableOpacity>
      <View style={{justifyContent:'center', alignContent:'flex-start', alignItems:'center'}}>
        <Text>FlashCards</Text>
      </View>
    </View>
  )
}


const StackNavigator = createStackNavigator({

  DeckList:{
    screen:DeckList,
    navigationOptions:{
      title:"DeckList"
    }
  }
})



export default class App extends React.Component {

  componentWillMount(){
    _storeData()   
  }

  render() {

    return (
      <View style={{flex: 1}}>
         <View style={{height: Constants.statusBarHeight,justifyContent:'flex-start'}}>
                <StatusBar translucent barStyle="light-content"/>
          </View>
          <StackNavigator/>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  button:{
    padding:10
  }
})











/*  const MainTabNavigator = createBottomTabNavigator({
   Home:{
     screen: DeckList,
     navigationOptions:{
       tabBarLabel: 'Deck',
       tabBarIcon: <MaterialIcons name='menu'  size={30} color={tintColor}/>
     }
   }
  },{
     tabBarOptions:{
       activeTintColor: Platform.OS == 'ios' ? blue: white,
       style:{
          height:56,
          backgroundColor: Platform.OS === 'ios' ? white: blue,
          shadowColor: 'rgba(0,0,0,0.50)',
          shadowOffset:{
              width:0, height:1
          }, shadowRadius: 6,
             shadowOpacity:1
       }
     }
   }
 ) */

/*  const Drawer = createDrawerNavigator({

      MainNavBar:{
        screen: MainNavBar
      },

      DeckList:{
        screen:DeckList,
        navigationOptions:{
          title:"DeckList"
        }
      },
      Study:{
        screen: Study,
        navigationOptions:{
          title:"Study"
        }
      }
 }) */