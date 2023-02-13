import React from "react";
import { AnyAction } from "redux";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { AppStateType } from "../../../redux/redux-store";
import { TContainerDataPost, TMPCMapDispatch, TMPCMapState } from "../types";
import MyPosts from "./MyPosts";

const ContainerDataPosts: React.FC<TContainerDataPost> = (props) => {
  return <MyPostsContainer profile={props.profile} />;
};

let mapStateToProps = (state: AppStateType): TMPCMapState => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (
  dispatch: ThunkDispatch<AppStateType, {}, AnyAction>,
): TMPCMapDispatch => {
  return {
    addPost: (NewPostBody: string) => {
      dispatch(addPostActionCreator(NewPostBody));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ContainerDataPosts;
