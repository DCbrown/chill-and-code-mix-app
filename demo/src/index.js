import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AudioPlayer from '../../src';

const songs = [
  {
    url: '../../src/playlist/Next-to-You.mp3',
    artist: {
      name: 'Next to You',
      song: 'Flamingosis',
    },
  },
  {
    url: '../../src/playlist/The-OneUps-Castlevania-II-Simon-Quest.mp3',
    artist: {
      name: 'The OneUps',
      song: 'Castlevaina II Simon Quest',
    },
  },
  {
    url: '../../src/playlist/The-OneUps-Street-Fighter-II-Sagat.mp3',
    artist: {
      name: 'The OneUps',
      song: 'Street Fighter II Sagat Theme',
    },
  },
];

ReactDOM.render(
  <div className="container">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:100,400,700"
      rel="stylesheet"
      type="text/css"
    />

    <h1>Chill And Code Mix</h1>
    <h2>
    </h2>
    <AudioPlayer songs={songs} />
    <div class="footer">Inspired by <a class="author" href="https://github.com/cezarlz/react-cl-audio-player" target="_blank">Cezar Luiz.</a></div>
  </div>,
  document.querySelector('#demo')
);
