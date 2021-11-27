import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./components/redux/state";


export let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}

                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
                 newPostMessage={state.dialogsPage}
            />
        </BrowserRouter>, document.getElementById('root'))
}









