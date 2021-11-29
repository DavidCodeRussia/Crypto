import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./components/redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerenderEntireThree = (state) => {
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

rerenderEntireThree(state)
subscribe(rerenderEntireThree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
