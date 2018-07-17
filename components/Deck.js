import React, {Component} from 'react';
import { connect } from 'react-redux'
import { 
  View,
  Platform,          
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
 } from 'react-native'
 import { setDeckView } from '../actions'
 
class Deck extends Component{     
    
    static navigationOptions = () => { 
        return {
          title: DeckList
        }
      }

    shouldComponentUpdate (nextProps) {
        return nextProps.Decks !== null 
      }


    handleDeckSelection(deck){          
        this.props.setDeckView(deck)          
        this.props.navigation.navigate(
              "DeckView",
              {deck: deck}
       )
      }
  

 render(){
     const { Decks }= this.props
  return(
        <View>  
            {Decks.map((deck,index) => {
                return(
                 <View key={index} >   
                   <TouchableOpacity onPress={() => this.handleDeckSelection(deck)}>
                      <View key={index} style={styles.deck}>    
                         <Text style={styles.text}>{deck.title}</Text> 
                          <Text style={{color:'gray'}}>
                           {deck.questions.length}
                           {(deck.questions.lengtht==1)?'card':'cards'}                     
                        </Text>                       
                     </View>   
                  </TouchableOpacity>
                </View>   
                   )})}
        </View>  
        )
    }
 }


function mapDispatchToProps(dispatch){
    return{
        setDeckView:(deck) => dispatch(setDeckView(deck))
    }
}

export default connect(null,
 mapDispatchToProps
)(Deck);













// *********** Style ***************

const styles = StyleSheet.create({
    deck:{
       flexDirection: 'row',               
       padding: 10,
       justifyContent: 'center',
       backgroundColor: 'white',
       height:100,
       flexWrap: "wrap",
       borderColor: "black",
       borderWidth: 1,
       borderRadius: 10,
   },
   text:{
       fontSize: 45,
       textAlign: 'center',
       marginTop: 5,
   }
})

