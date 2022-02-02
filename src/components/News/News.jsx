import s from './News.module.css';
import {Navigate} from "react-router-dom";
import React from "react";

const NewsContainer = (props) => {
    if(!props.isAuth) return <Navigate replace to="/Login" />
    return (
        <div className={s.NewsFeed}>News</div>
    )
}

export default NewsContainer;