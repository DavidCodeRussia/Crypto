import cn from "classnames";
import ReactPlayer from "react-player";

import { VideoJSContainer } from "../VideoJSContainer";
import s from "./ReactPlayerCompoonet.module.scss";

export const ReactPlayerCompoonet = ({ padding = false }) => {
  return (
    <div
      className={cn(s.component, {
        [s.padding]: padding,
      })}>
      <div className={s.reactPlayerHeader}>1. react-player - 459 174 загрузок за неделю</div>
      <div className={s.reactPlayerWrapper}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          controls={true}
          // width={"740px"}
          // height={"420px"}
        />
      </div>

      <div className={s.reactPlayerHeader}>2. videojs/video.js - 376 886 загрузок за неделю</div>
      <VideoJSContainer />
    </div>
  );
};
