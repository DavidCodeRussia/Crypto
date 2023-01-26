import React from "react";
import videojs from "video.js";
import { VideoJS } from "./VideoJS";

export const VideoJSContainer = () => {
  const playerRef = React.useRef(null);
  const videoJsOptions = {
    autoplay: false,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 640, // 720
    height: 360, // 300
    controls: true,
    sources: [
      {
        src: "https://videoreel2-videos.s3-us-west-2.amazonaws.com/2/projects/5208/output.mp4",
        label: "HDd",
        res: 720,
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
};
