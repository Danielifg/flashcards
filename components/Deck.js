import React, {Component} from 'react';
import { 
  View,
  Platform,          
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
 } from 'react-native'

export default class Deck extends Component{     
        
    shouldComponentUpdate (nextProps) {
        return nextProps.Decks !== null 
      }

 render(){
     const { Decks }= this.props
  return(
        <View>  
            {Decks.map((deck) => {
            return(
              <View style={{ backgroundColor:'powderblue'}}>    
                   <Text>{deck.key}</Text>    
             </View>   
                 )})}
        </View>  
        )
    }
 }