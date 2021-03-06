import React from 'react';
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import  thunk from 'redux-thunk'
import { Container } from 'native-base';
import { setLocalNotification } from './utils/api'
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
 import Success from './components/Success'
 
 

//Main stack Navigator
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
  }, Success: {
    screen: Success
  },   
 }
)

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
  
  
  //Native-base imports
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: false });
  }
 componentDidMount(){
    setLocalNotification()
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
