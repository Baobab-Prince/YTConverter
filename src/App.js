import React, { useState, useEffect } from 'react';
import './App.css';
import DownloadButton from './DownloadButton';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [id, setId] = useState('');
  useEffect(() => {
    const id = videoUrl.replace('https://www.youtube.com/watch?v=', '');
    setId(id);
  }, [videoUrl]);

  return (
    <div className="app">
      <div className="app_navbar">
        <h1>YouTube Converter</h1>
        <h2>Let's make some noise!😎</h2>
      </div>
      <div className="app_linkBox">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={(e) => setVideoUrl(e.target.value)}
            value={videoUrl}
            type="text"
            placeholder="Paste youtube url here"
          />
        </form>
      </div>
      <div className="download_button">
        <DownloadButton id={id} type="mp3" />
      </div>
    </div>
  );
}

export default App;
