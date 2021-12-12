import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
/*

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
*/
// это так, на память

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;