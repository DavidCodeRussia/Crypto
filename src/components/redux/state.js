let store = {
    _state: {
            profilePage: {
                posts: [
                    {id: 1, message: 'Hi brosky, how\'s it going?', likes: 2},
                    {id: 2, message: 'It\'s my first post', likes: 5}
                ],
                descrription: [
                    {id: 1, question: 'Name: David'},
                    {id: 2, question: 'Surname: Arakelyan'},
                    {id: 3, question: 'Owner: Bitcoin, ETH, Dogecoin ...'},
                    {id: 4, question: 'Balance: 23647326723 $'},
                    {id: 5, question: 'City: Saratov, Russia'},
                    {id: 6, question: 'Years Old: 17'},
                    {id: 7, question: 'Gender: Walmart Backpack 132P'}
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
                newPostMessage: 'write messages here'
            }
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

    dispatch(action) { // { type: 'ADD-POST }
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 2
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }

            else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        }

            else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newPostMessage
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newPostMessage = ''
            this._callSubscriber(this._state)
        }

            else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newPostMessage = action.text
            this._callSubscriber(this._state)
        }
    }
}

export default store
window.store = store