import React from 'react';
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStackNavigator,
         createBottomTabNavigator,
         createDrawerNavigator } from 'react-navigation'
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
 import DeckView from './components/DeckView'
 import Quiz from './components/Quiz'

const store = createStore(
  reducer
)


 function MainNavBar  ({ navigation }) {
  return(
    <Provider store={store}>
     <View style={{height:50, backgroundColor:'powderblue'}}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <MaterialIcons name='menu' size={50} color="blue"/>
      </TouchableOpacity>
      <View style={{justifyContent:'center', alignContent:'flex-start', alignItems:'center'}}>
          <Text>FlashCards</Text>
        </View>
      </View>
    </Provider>
  )
}


const StackNavigator = createStackNavigator({

  DeckList:{
    screen:DeckList,
    navigationOptions:{
      title:"DeckList"
    }
  },
  DeckView:{
    screen: DeckView,
    navigationOptions:{
      headerTintColor:"white",
      headerStyle:{
        backgroundColor: black
      }
    }
  },
  DeckView:{
    screen: Deck,
    navigationOptions:{
      headerTintColor:"white",
      headerStyle:{
        backgroundColor: black
      }
    }
  },
  Quiz:{
    screen: Quiz,
    navigationOptions:{
      headerTintColor:"white",
      headerStyle:{
        backgroundColor: black
      }
    }
})

export default class App extends React.Component {

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