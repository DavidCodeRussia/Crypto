import s from './News.module.css';
import React from "react";
import {withAuthNavigate} from "../../hoc/withAuthRedirect";

const NewsContainer = (props) => {

    return (
        <div className={s.NewsFeed}>News</div>
    )
}

export default withAuthNavigate(NewsContainer);