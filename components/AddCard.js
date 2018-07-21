import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native'
import {Container, Content, InputGroup, Input, Button } from 'native-base'
import { Entypo } from '@expo/vector-icons'


export default class AddCard extends Component{
    constructor(props){
        super(props)

        this.state = {
            question:'', 
            answer:''         
        };              
    };

    _addNewDeck(newDeck){
        alert(newDeck)
    }

     render(){
         return(
            <Container style={{flex:1}}>
            <Content contentContainerStyle={css.content}>

               <Text style={{fontSize:45}}>Add a new Deck !</Text>

              <InputGroup borderType='underline'>
                 <Entypo name='edit'   size={45} color='#2196F3' />    
                  <Input placeholder="Question"           
                        onChangeText={(question) =>
                                {() => this.setState({question})}}
                                value={this.state.question} />
              </InputGroup>

                <InputGroup borderType='underline'>
                   <Entypo name='edit'   size={45} color='#2196F3' />    
                   <Input placeholder="Answer"           
                        onChangeText={(answer) =>
                                {() => this.setState({answer})}}
                                value={this.state.answer} />

              </InputGroup>

              <View style={{flexDirection:'row'}}>                 
                 <Button style={{flex:1}} onPress={() => this._addNewDeck(this.state.text)}>
                    <Text>Submit</Text>
                  </Button>   
               </View>

           </Content>                                    
         </Container>
         )
     }
 }

 const css = StyleSheet.create({
    content: {
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