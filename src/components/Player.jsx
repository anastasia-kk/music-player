import React, {useRef, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    return isPlaying ? audioRef.current.play() : audioRef.current.pause();
  },[isPlaying]);
  return(
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range"/>
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        {isPlaying ? (
          <FontAwesomeIcon onClick={() => setIsPlaying(false)} className="pause" size="2x" icon={faPause} />
        ) : (
          <FontAwesomeIcon onClick={() => setIsPlaying(true)} className="play" size="2x" icon={faPlay} />
        )}
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;