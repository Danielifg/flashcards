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

    static navigationOptions = () => { 
        return {
          title: DeckList
        }
      }

    state={
        Decks:[],
        fetching:false
    }

    componentWillMount(){
        this.setState({fetching:true})
        getDecks().then(Decks => { this.setState({Decks:Decks, fetching: false})})                      
    }

    componentDidUpdate(){
        console.log("did update")
       getDecks().then(Decks => { 
           this.setState({Decks:Decks, fetching: false})})                      
    }
    
  

 render(){
     const {Decks, fetching }=this.state
     
     console.log(Decks)
     if(!fetching){
          return(
            <View style={{flex:1}}>       
                <Deck Decks={Decks} />
            </View>
         )                 
     }
         return <Text>Loading ...</Text>
       
     }
 }

/*  export default connect(
     mapStateToProps,
     mapDispatchToProps
 )(DeckList); */

 