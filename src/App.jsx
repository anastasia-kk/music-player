import React, {useState} from "react";
//Importing styles
import "./styles/app.scss";
//Components
import Player from "./components/Player";
import Song from "./components/Song";
import { chillHop as data } from "./data";


function App() {
  //State
  const songs = data();
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
