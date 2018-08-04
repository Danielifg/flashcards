import React, {Component} from 'react';
import {View, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native'
import {
    Container,
    Content,
    InputGroup,
    Input,
    Card,
    CardItem,
    Text,
    Button,
    Left,
    Body
} from 'native-base'
import {Entypo} from '@expo/vector-icons'
import {addCard} from '../utils/api'
import {connect} from 'react-redux'

class AddCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: '',
            answer: '',
            deck: ''
        };
    };

    _addNewCard(question, answer) {
        const { deck,deckTitle }= this.props
        addCard(deckTitle, question, answer);
        this.props.navigation.navigate('DeckList')
    }

    render() {
        const {question, answer} = this.state
        return (
            <KeyboardAvoidingView style={css.content} behavior="padding" enabled>
                <Container style={{
                    flex: 1
                }}>
                    <Content contentContainerStyle={css.content} padder>

                        <Card style={{
                            flex: 0
                        }}>
                            <CardItem>
                                <Left>
                                    <Text
                                        style={{
                                        fontSize: 30,
                                        color: '#D3D3D3'
                                    }}>Add a new Card !</Text>
                                </Left>
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Body>
                                        <Entypo name='edit' size={25} color='#2196F3'/>
                                        <TextInput
                                          style={{
                                            color: '#D3D3D3'
                                        }}
                                            placeholder="Question..."
                                            onChangeText={(textQuestion) => {
                                            this.setState({question: textQuestion})
                                        }}
                                            value={this.state.question}/>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Body>

                                        <Entypo name='edit' size={25} color='#2196F3'/>
                                        <TextInput
                                            style={{
                                            color: '#D3D3D3'
                                        }}
                                            placeholder="Answer"
                                            onChangeText={(textAnswer) => {
                                            this.setState({answer: textAnswer})
                                        }}
                                            value={this.state.answer}/>

                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Body>
                                        <View
                                            style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center'
                                        }}>
                                            <Button
                                                style={{
                                                backgroundColor: '#2196F3',
                                                marginBottom: 70,
                                                width: 200,
                                                height: 50,
                                                justifyContent: 'center'
                                            }}
                                                onPress={() => this._addNewCard(question, answer)}>

                                                <Text
                                                    style={{
                                                    color: 'white',
                                                    margin: 'auto'
                                                }}>
                                                    Submit</Text>
                                            </Button>
                                        </View>
                                    </Body>
                                </Left>
                            </CardItem>

                        </Card>
                    </Content>
                </Container>
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(state, {navigation}) {
    const {deckTitle, deck} = navigation.state.params

    return {deckTitle, deck}
}

export default connect(mapStateToProps, null)(AddCard)

const css = StyleSheet.create({
    content: {
        padding: 3,
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'stretch'
    },
    textInput: {
        flex: 1,
        paddingLeft: 10
    },
    text: {
        padding: 10,
        color: 'white'
    },
    textBubbleBackground: {
        backgroundColor: '#2f7bf6',
        borderRadius: 20,
        width: 110,
        margin: 20
    }
});