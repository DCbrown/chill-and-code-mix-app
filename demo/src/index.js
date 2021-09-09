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
  {
    url: '../../src/playlist/CrashMan From The OneUps.mp3',
    artist: {
      name: 'The OneUps',
      song: 'Crash Man',
    },
  },
  {
    url: '../../src/playlist/Fire Drill.mp3',
    artist: {
      name: 'Gecko Yamori',
      song: 'Fire Drill',
    },
  },
  {
    url: '../../src/playlist/Flash the Funk.mp3',
    artist: {
      name: 'Gecko Yamori',
      song: 'Flash the Funk',
    },
  },
  {
    url: '../../src/playlist/Street Fighter EX3 Music Ancient Zone Theme.mp3',
    artist: {
      name: 'CAPCOM',
      song: 'Street Fighter EX3 Music Ancient Zone',
    },
  },
  {
    url: '../../src/playlist/Street Fighter EX3 OST - Character Edit.mp3',
    artist: {
      name: 'CAPCOM',
      song: 'Street Fighter EX3 OST - Character Edit',
    },
  },
  {
    url: '../../src/playlist/The OneUps - F-Zero - Port Authority [Port Town].mp3',
    artist: {
      name: 'The OneUps',
      song: 'F-Zero - Port Authority [Port Town]',
    },
  },
  {
    url: '../../src/playlist/The OneUps - F-Zero - Silence is Golden, Snitches Get Stitches [Silence].mp3',
    artist: {
      name: 'The OneUps',
      song: 'F-Zero - Silence is Golden',
    },
  },
  {
    url: '../../src/playlist/The OneUps - Mega Man X - Boomer Kuwanger.mp3',
    artist: {
      name: 'The OneUps',
      song: 'Mega Man X - Boomer Kuwanger',
    },
  },
  {
    url: '../../src/playlist/The OneUps - ToeJam & Earl - Alien Break Down.mp3',
    artist: {
      name: 'The OneUps',
      song: 'ToeJam & Earl - Alien Break Down',
    },
  },
  {
    url: '../../src/playlist/Flamingosis - A Groovy Thing - 15 get yourself together.mp3',
    artist: {
      name: 'Flamingosis',
      song: 'Get Yourself Together',
    },
  },
  {
    url: '../../src/playlist/Flamingosis - Come & Get It feat. Yung Bae (2017).mp3',
    artist: {
      name: 'Flamingosis',
      song: 'Come & Get It feat. Yung Bae',
    },
  },
  {
    url: '../../src/playlist/Flamingosis - Feelings of sentimentality due to getting curved.mp3',
    artist: {
      name: 'Flamingosis',
      song: 'Feelings Of Sentimentality Due To Getting Curved',
    },
  },
  {
    url: '../../src/playlist/Flamingosis - Flute Salad (2017).mp3',
    artist: {
      name: 'Flamingosis',
      song: 'Flute Salad',
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
