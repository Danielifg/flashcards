import React from 'react';
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStackNavigator,
         createBottomTabNavigator,
         createDrawerNavigator } from 'react-navigation'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { createStore } from 'redux'
import {getDecks} from  './utils/api'
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
 } from 'react-native'
 import DeckList from './components/DeckList'
 import DeckView from './components/DeckView'
 import Quiz from './components/Quiz'

const store = createStore(
  reducer
)

const StackNavigator = createStackNavigator({

  DeckList:{
    screen: DeckList ,
    navigationOptions:{
      title:"DeckList"
    }
    //
    //screen: props=> <CartScreen {...props} screenProps={other required prop}
  },
  DeckView:{
    screen: DeckView,
    navigationOptions:{
      headerTintColor:"white",
      headerStyle:{
        backgroundColor: "black"
      }
    }
  },
  Quiz:{
    screen: Quiz,
    navigationOptions:{
      headerTintColor:"white",
      headerStyle:{
        backgroundColor: "black"
      }
    }
  } 
})

export default class App extends React.Component {
  componentWillMount(){
    getDecks()
  }

 render() {
    return (
     <Provider store={store}> 
      <View style={{flex: 1}}>
         <View style={{height: Constants.statusBarHeight,justifyContent:'flex-start'}}>
                <StatusBar translucent barStyle="light-content"/>
          </View>
          <StackNavigator  />
        </View>
        </Provider>  
    );
  }
}
