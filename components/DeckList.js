import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { createStackNavigator, 
         createBottomTabNavigator, 
         createDrawerNavigator } from 'react-navigation'
//import { reducer } from 'reducer'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import Deck from './Deck'

import { 
  View,
  Platform,          
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
 } from 'react-native'

 export default class DeckList extends Component{
    state={
        Decks:[]
    }
    
    componentDidMount(){
        getDecks()        
        .then(Decks => {
           if(Decks !== undefined){
               this.setState({Decks:Decks})}
        })
    }
    

     static navigationOptions = {
         tabBarLabel:'DeckList'
     }


     RenderDeck(){
         if(this.state.Decks !== undefined){
             return <Deck Decks={Decks}/>
         }
         return null;
     }
     
     render(){
         return(
            <View style={{flex: 1, backgroundColor:'blue'}}>       
                <RenderDeck />
            </View>
         )
     }
 }

/*  export default connect(
     mapStateToProps,
     mapDispatchToProps
 )(DeckList); */

 