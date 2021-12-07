import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi brosky, how\'s it going?', likes: 2},
                {id: 2, message: 'It\'s my first post', likes: 5}
            ],
            descrription: [
                {id: 1, question: 'Name: David'},
                {id: 2, question: 'Surname: Omzzzanyan'},
                {id: 3, question: 'Owner: Bitcoin, ETH, Dogecoin ...'},
                {id: 4, question: 'Balance: 67326723 $'},
                {id: 5, question: 'Country: USA,'}
            ],
            newPostText: 'something very important'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
            this._state.profilePage =  profileReducer(this._state.profilePage, action)
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
            this._callSubscriber(this._state)
        }
    }

export default store
window.store = store