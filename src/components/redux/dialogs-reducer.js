const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Katya'},
        {id: 3, name: 'Vanya'},
        {id: 4, name: 'Magomed'},
        {id: 5, name: 'Natali'},
        {id: 6, name: 'Eduard'},
        {id: 7, name: 'Sergey'}
    ],
    messages: [
        {id: 1, message: 'Hello Katya'},
        {id: 2, message: 'Hi Andrey'},
        {id: 3, message: 'How is it going?'},
        {id: 4, message: 'Nice and you?'}
    ],
    newMessageBody: 'write messages here'
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageBody = action.body
            return state
        }
        default:
            return state
    }
    return state
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: text})

export default dialogsReducer