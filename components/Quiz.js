import React, {Component} from 'react';
import { 
  View,
  Platform,          
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
 } from 'react-native'
 import { connect } from 'react-redux'

 class Quiz extends Component{

    static navigationOptions = ({ navigation }) => { 
        const { deck } = navigation.state.params
        return {
          title: DeckList
        }
      }

     render(){
         return(
            <TouchableOpacity onPress={ this.handleDeckSelection(deck)}>
             <View key={index} style={styles.deck}>    
      
               <Text style={styles.text}>{deck.title}</Text> 
                <Text style={{fontColor:"gray", oder:2}}>
                 {deck.questions.length}
                 {(deck.questions.lengtht==1)?'card':'cards'}                     
              </Text>                       
            </View>   
            </TouchableOpacity>
         )
     }
 }
 function mapStateToProps(deck){
     question: deck.questions          
 }
export default connect(mapStateToProps,null)(Quiz)