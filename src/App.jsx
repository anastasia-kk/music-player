import React, {useState} from "react";
//Importing styles
import "./styles/app.scss";
//Components
import Player from "./components/Player";
import Song from "./components/Song";
import { chillHop as data } from "./data";


function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player currentSong={currentSong}/>
    </div>
  );
}

export default App;
