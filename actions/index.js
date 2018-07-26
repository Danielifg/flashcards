const SELECT_DECK = 'SELECT_DECK'
 const setDeckView = ({deck}) => ({
    type: SELECT_DECK,
    deck
})

export {
    SELECT_DECK,
    setDeckView
}