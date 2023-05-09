import React from "react";

import ReactPlayer from "react-player/youtube";

import "./PlayVideo.scss";

const PlayVideo = ({ setIsOpen }) => {
  return (
    <>
      <div className="player_overlay" onClick={() => setIsOpen(false)}></div>
      <div className="player">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=7EHnQ0VM4KY"}
          className="player_video"
        />
        <h1 className="player_closer" onClick={() => setIsOpen(false)}>
          X
        </h1>
      </div>
    </>
  );
};

export const MemoizedPlayVideo = React.memo(PlayVideo);
