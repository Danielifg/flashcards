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
 import { styles } from './DeckView'

 class Quiz extends Component{

    static navigationOptions = ({ navigation }) => { 
        const { deck } = navigation.state.params
        return {
          title: `${deck.title} Quiz`
        }
      }


      _showAnswer = (answer) =>{
        alert(answer);
      }

     render(){
       const { deck } = this.props.navigation.state.params
         return(
          <View style={styles.container}>
             <Text>count /{deck.questions.length}</Text> 

             <View style={styles.section}>                   
                   <Text style={{fontSize:35,color:'#D3D3D3'}}>{deck.questions[0].question}</Text> 
                  
                  <TouchableOpacity 
                     onPress={() => this._showAnswer(deck.questions[0].answer)}>        
                    <Text style={{color:'red',textAlign:'center'}}>Answer</Text>                                                
                </TouchableOpacity>
            
            </View>      
            <View style={styles.section2}>                  
                <TouchableOpacity style={style.correctBtn}>        
                    <Text style={style.txt}>Correct</Text>                                                
                </TouchableOpacity>
                <TouchableOpacity style={style.incorrectBtn}>        
                    <Text style={style.txt}>Incorrect</Text>                                                
                </TouchableOpacity>
                </View>
          </View>
         )
     }
 }
 const mapStateToProps = (deck) => ({
  currentDeck: deck,
  numDeckCards: deck.questions 
})
export default connect(mapStateToProps,null)(Quiz)

export const style = StyleSheet.create({
  correctBtn:{
     padding: 10,
     backgroundColor: 'green',
     height:50,
     borderColor: "white",
     borderWidth: 3,
     borderRadius: 1,           
 },
 incorrectBtn:{
     padding: 10,
     backgroundColor: 'red',
     height:50,
     borderColor: "white",
     borderWidth: 3,
     borderRadius: 5,           
 },
 txt:{
   color:'white'
 }
})