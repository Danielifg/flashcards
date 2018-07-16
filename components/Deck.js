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
 import { setDeckView } from '../actions'
 import { withNavigation } from 'react-navigation'

class Deck extends Component{    
    constructor(props){
        super(props)
    } 
        
    shouldComponentUpdate (nextProps) {
        return nextProps.Decks !== null 
      }

     handleDeckSelection(deck){          
      this.props.setDeckView(deck)          
      this.props.navigation.navigate(
            "DeckView",
            {deck: deck}
     )}


 render(){
     const { Decks }= this.props          
  return(      
        <View>  
            {Decks.map((deck,index) => {
              
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
                 )})}
        </View>  
        )
    }
 }

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

function mapDispatchToProps(dispatch){
    return{
        setDeckView:(deck) => dispatch(setDeckView(deck))
    }
}

export default compose(
    withNavigation(Deck),
    connect(null, mapDispatchToProps)
  )(Deck);


export default connect(
    null, 
    mapDispatchToProps)
    (withNavigation(Deck)(Deck));

export default connect(
    null,
    mapDispatchToProps
)(Deck);