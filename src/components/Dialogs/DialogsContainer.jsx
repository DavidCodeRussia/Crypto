import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../redux/StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let onAddMessageActionCreator = () => {
                        store.dispatch(addMessageActionCreator())
                    }
                    let onUpdateNewMessageActionCreator = (text) => {
                        store.dispatch(updateNewMessageActionCreator(text))
                    }
                    return <Dialogs updateNewMessageBody={onUpdateNewMessageActionCreator}
                                    sendMessage={onAddMessageActionCreator}
                                    dialogsPage={store.getState().dialogsPage}
                            />
                }

            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;