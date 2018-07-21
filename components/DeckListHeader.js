import React, { Component } from 'react';
import {  Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'



export default class DeckListHeader extends Component {
   
  render() {
    const { nav } = this.props
    _passRoute = () =>{
      this.props.nav.state.params? nav.navigate("AddCard",{deck:nav.state.params.deck})
                       : nav.navigate("AddDeck")
    }
    return (        
        <Header style={{backgroundColor:'#2196F3'}}>
          <Left>
            <Button transparent>
              <MaterialCommunityIcons name='cards-playing-outline'
                    size={45} color='white' />
            </Button>
          </Left>
          <Body>
            <Title>{(nav.state.params)?
                    nav.state.params.deck.title:"DeckHub"}</Title>
          </Body>
          <Right>
            
            <Button transparent onPress={() => _passRoute()}>
              <Entypo name='add-to-list' size={30} color='white' />
            </Button>
          </Right>
        </Header>
    );
  }
}

//title: navigation.state.params.deck.title