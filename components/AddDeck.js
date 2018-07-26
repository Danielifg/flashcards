import React, {Component} from 'react';
import { StyleSheet,Text,View, TextInput,KeyboardAvoidingView} from 'react-native'
import {Container, Content, InputGroup, Input, Button } from 'native-base'
import { Entypo } from '@expo/vector-icons'
import { addDeck } from '../utils/api' 

export default class AddDeck extends Component{
    constructor(props){
        super(props)

        this.state = { 
           title:''         
        };              
    };

    _addNewDeck(newDeck){    
         addDeck(newDeck)
         this.props.navigation.navigate("DeckList")
    }

     render(){
         return(
          <KeyboardAvoidingView style={css.content} behavior="padding" enabled>
            <Container style={{flex:1}}>
             <Content contentContainerStyle={css.content}>

                <Text style={{fontSize:45}}>Add a new Deck !</Text>

               <View>
                  <Entypo name='edit'   size={45} color='#2196F3' />    
                  <TextInput placeholder="Name..."           
                         onChangeText={(text) => {this.setState({title:text})}}
                         value={this.state.title} />

               </View>

               <View style={{flexDirection:'row',marginBottom:50,justifyContent:'center'  }}>                 
               <Button
                            style={{backgroundColor:'#2196F3', 
                            marginBottom:70,width:200, 
                            height:50,justifyContent:'center' }} onPress={() => this._addNewDeck(this.state.title)}>
                    <Text>Add +</Text>
                  </Button>   
                </View>
            </Content>                                    
          </Container>
          </KeyboardAvoidingView>
         )
     }
 }


 const css = StyleSheet.create({
    content: {
      padding:15,
        flex:1,
      justifyContent:'space-between',
      alignContent:'stretch'
    },
    textInput: {
      flex: 1,
      paddingLeft: 10,
    },
    text: {
      padding: 10,
      color: 'white',
    },
    textBubbleBackground: {
      backgroundColor: '#2f7bf6',
      borderRadius: 20,
      width: 110,
      margin: 20,
    },
  });
  