import React, {Component} from 'react';
import {
    Container,
    Content,
    Card,
    CardItem,
    Text,
    Body,
    Left
} from "native-base";
import {View, Platform, StatusBar, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import DeckListHeader from './DeckListHeader'

class DeckView extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <View
                    style={{
                    flex: 1,
                    alignContent: 'center'
                }}>
                    <DeckListHeader nav={navigation}/>
                </View>
        }
    };

    _handleQuiz = (deck) => {
        (deck && deck.questions.length == 0)
            ? this
                .props
                .navigation
                .navigate('AddCard', {deckTitle: this.props.navigation.state.params.deck.title})
            : this
                .props
                .navigation
                .navigate('Quiz', {deck: deck})
    }

    render() {
        const {deck} = this.props.navigation.state.params

        return (
            <Container
                style={{
                flexDirection: 'column',
                flex: 1 ,alignContent:'center'              
            }}>
                <Content  style={{flexWrap:'wrap' }} padder>

                    <Card style={{flex: 1,justifyContent:'space-between', height:350, flexWrap:'wrap'}}>
                        <CardItem
                            style={{
                            justifyContent: "center"
                        }}>

                            <Text
                                style={{
                                fontSize: 45,
                                color: '#D3D3D3'
                            }}>
                                {deck.title}
                            </Text>

                        </CardItem>

                        <CardItem>
                            <Left>
                                <Body>
                                    <Text
                                        style={{
                                        fontSize: 20,
                                        textAlign: 'center',
                                        color: '#D3D3D3'
                                    }}>
                                        {deck.questions.length}
                                        {(deck.questions.length) > 1
                                            ? 'cards'
                                            : 'card'}
                                    </Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem
                            style={{
                            justifyContent: 'center',marginBottom:30
                        }}>
                            <Body>
                                <View
                                    style={{
                                    flexDirection: 'row'
                                }}>
                                    <TouchableOpacity
                                        style={styles.startBtn}
                                        onPress={() => this._handleQuiz(deck)}>

                                        <Text
                                            style={{
                                            color: 'white',
                                            textAlign: 'center'
                                        }}>
                                            {(deck.questions.length == 0)
                                                ? 'Add Card'
                                                : 'Start Quiz'}
                                        </Text>

                                    </TouchableOpacity>
                                </View>
                            </Body>
                        </CardItem>

                    </Card>
                </Content>
            </Container>

        )
    }
}
const mapStateToProps = (deck) => ({currentDeck: deck, numDeckCards: deck.questions})

export default connect(mapStateToProps, null)(DeckView);

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white'
    },
    section: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    section2: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flexWrap: 'wrap'

    },
    addBtn: {
        padding: 10,
        backgroundColor: 'white',
        height: 50,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10
    },
    startBtn: {
        padding: 10,
        backgroundColor: '#2196F3',
        height: 50,
        flex: 1,
        justifyContent: 'center',
        borderRadius: 5
    }
})
