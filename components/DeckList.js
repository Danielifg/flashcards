import React, {Component} from 'react';
import { createStackNavigator, 
         createBottomTabNavigator, 
         createDrawerNavigator } from 'react-navigation'
//import { reducer } from 'reducer'
import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { setDeckView } from '../actions'
import {getDecks} from  '../utils/api'
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
    constructor(props){
        super(props)

        this.state={
            Decks:[],
            fetching:false
        }

        getDecks().then(Decks => { 
            this.setState(    
           {Decks:Decks,
            fetching: false}
        )}) 
        console.log("way")    
    }

    static navigationOptions = () => { 
        return {
          title: DeckList
        }
      }

 
    componentDidMount(){
        console.log("did update")
    
       getDecks().then(Decks => { 
           this.setState({
               Decks:Decks, 
               fetching: false
        })})       
    }

    shouldComponentUpdate (nextProps) {
        return nextProps.Decks !== null 
      }


 render(){
    const { Decks, fetching } = this.state

    console.log(Decks)

     if(!fetching){
          return(
            <View style={{flex:1}}>     
                <Deck Decks={Decks}/>
            </View>
         )                 
     }
   return <Text>Loading ...</Text>
     }
 }


