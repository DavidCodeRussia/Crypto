const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 2
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
         case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer