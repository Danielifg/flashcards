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

class DeckView extends Component{

    static navigationOptions = ({ navigation }) => { 
     //   const { deck } = navigation.state.params
        return {
          title: DeckList
        }
      }


    handleAddBtn(){
        alert("add")
    }
    handleStartBtn(){
        alert("start")
    }

     return(){

        // const{ currentDeck, numDeckCards } = this.props

         render(           
          <View style={{deckview}} >
              <Text style={{fontSize: 16}}>
               TITLE DECK
              </Text>
              {/* <Text style={{fontSize: 16}}>                
               {numDeckCards}
              </Text>

               <TouchableOpacity style={{startBtn}} onPress={() => this.handleStartBtn()}>
                    Add Quiz
                </TouchableOpacity>

                <TouchableOpacity style={{addBtn}} 
                        onPress={this.props.navigation.navigate(
                            "Quiz",
                            {deck: deck}
                     )}>                     
                    Start Card
                </TouchableOpacity> */}
                
            </View>
         )
     }
 }
 const mapStateToProps = (deck) => ({
     currentDeck: deck,
     numDeckCards: deck.questions.length
 })
 
 export default connect(
    mapStateToProps,
    null
)(DeckView);


 const styles = StyleSheet.create({
     deckview:{
        flexDirection: 'row',
        flex:1,
        marginTop: 10,
        flexDirection: 'row',               
        padding: 10,
        justifyContent: 'center',
        backgroundColor: 'white',        
        flexWrap: "wrap"
     },
     startBtn:{
        width:100
     },
     addBtn:{
        width:100
     }
 })