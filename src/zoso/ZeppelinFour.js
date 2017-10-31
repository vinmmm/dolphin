import React from 'react'
import ZeppelinFourSong from './ZeppelinFourSong';
import ZeppelinFourSongInput from './ZeppelinFourSongInput';
import Animation from './Animation';



class ZeppelinFour extends React.Component {

constructor() {
  super();

  this.state = {
  songs: []
 };
}


  dealwitshitAddSong(songName) {
console.log("dealwitshitAddSong", songName);
const newSongs = this.state.songs.concat({ songName: songName, good: false});
this.setState({ songs: newSongs });
  }



  render() {

// compare the es5 function w es6 fat arrow function below
    return (
   <div>   
      <ul>
    { this.state.songs.map(function(song) { return <ZeppelinFourSong songName={song.songName} good={song.good} /> })}
      </ul>

      <ul>
    { this.state.songs.map(song => <ZeppelinFourSong songName={song.songName} good={song.good} /> )}
      </ul>

      <ZeppelinFourSongInput onAddSong={this.dealwitshitAddSong.bind(this)} />
      <Animation />
   </div>
    );
  }
}


export default ZeppelinFour;