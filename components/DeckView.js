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
 import DeckListHeader from './DeckListHeader'

class DeckView extends Component{

       static navigationOptions = ({ navigation }) => { 
        return {
          headerTitle: <View style={{flex:1,alignContent:'center'}}> 
                            <DeckListHeader nav={navigation}/>      
                      </View>                     
        }
      }; 

    handleAddBtn(){
        alert("add")
    }
    handleStartBtn(){
        alert("start")
    }

     render(){    
        const {deck} = this.props.navigation.state.params
         return(           
          <View style={styles.container} >    
            <View style={styles.section}>
               <Text style={{fontSize:45,color:'#D3D3D3'}}>                
                  {deck.title}
              </Text>        
                 <Text style={{fontSize:20,textAlign:'center',color:'#D3D3D3'}}>                
                   {deck.questions.length} {(deck.questions.length)>1?'cards':'card'}
              </Text>
          </View>
           <View style={styles.section2}>
               {/* <TouchableOpacity style={styles.addBtn}
                     onPress={() => this.handleStartBtn()}>
                   <Text> Add Card </Text>
                </TouchableOpacity>
 */}
                <TouchableOpacity style={styles.startBtn} 
                        onPress={() => this.props.navigation.navigate(
                            "Quiz",
                            {deck: deck}
                     )}>                     
                    <Text style={{color:'white'}}>Start Quiz</Text>
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
 
 export default connect(
    mapStateToProps,
    null
)(DeckView);


 export const styles = StyleSheet.create({
     container:{    
        flex:1,    
        justifyContent:'space-between',
        padding: 10,
        backgroundColor: 'white'           
     },
     section:{
      flex:1,      
       alignSelf:'center',
       alignItems:'stretch',
       justifyContent:'center'
     },
     section2:{
       flex:1,
       flexDirection:'row',       
       alignSelf:'center',
       alignItems:'stretch',
       justifyContent:'space-between',
       flexWrap:'wrap'

     }, 
     addBtn:{
        padding: 10,
        backgroundColor: 'white',
        height:50,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,           
    },
    startBtn:{
        padding: 10,
        backgroundColor: 'black',
        height:50,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 5,           
    }
 })