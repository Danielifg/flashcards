import React from 'react';
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStackNavigator,
         createBottomTabNavigator,
         createDrawerNavigator } from 'react-navigation'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { createStore, applyMiddleware } from 'redux'
import {getDecks} from  './utils/api'
import  thunk from 'redux-thunk'
import { Container } from 'native-base';
import DeckListHeader from './components/DeckListHeader'

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
 import AddDeck from './components/AddDeck'
 import AddCard from './components/AddCard'
 


const StackNavigator = createStackNavigator({
  DeckList: {
    screen: DeckList
  },
  DeckView: {
    screen: DeckView,
    navigationOptions:{
      headerTintColor:"white",
      headerStyle:{
        backgroundColor: "#2196F3"        
      },
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions:{
      headerTintColor:"white",
      headerStyle:{
        backgroundColor: "#2196F3"
      },
    },
  } ,
  AddDeck: {
    screen: AddDeck,
    navigationOptions:{
      headerTintColor:"white",
      headerStyle:{
        backgroundColor: "#2196F3" 
      },
    },
  },AddCard: {
    screen: AddCard,
    navigationOptions:{
      headerTintColor:"white",
      headerStyle:{
        backgroundColor: "#2196F3"
      },
    },
  },  
 }
)

StackNavigator.navigationOptions = ({ navigation }) => {
    let { routeName } = navigation.state.routes[navigation.state.index];
    let headerTitle = routeName;
    return { 
      headerTitle
    }
}



const store = createStore(
  reducer,
    applyMiddleware(thunk)
)
export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      fontLoaded:true          
    };              
};
  
  async componentWillMount() {

    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: false });
  }

  On(){
    console.log("works")
  }

 render() {
   return(
    <Provider store={ store  }> 
    <Container>    
      {!this.state.fontLoaded? (       
            <View style={{flex: 1}}>                           
              <StackNavigator/>         
            </View> )
          :null
      }
      </Container>
    </Provider>
   ) 
  };
};
