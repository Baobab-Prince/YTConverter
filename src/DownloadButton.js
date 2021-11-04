import React from 'react';
import './DownloadButton.css';

function DownloadButton({ id, type }) {
  return (
    <div className="download">
      <iframe
        className="button-api-frame"
        src={`https://api.tubemp3.biz/${type}/ ${id}`} 
        frameborder="0"
        width="160px"
        height="60px"
        allowTransparency="true"
        scrolling="no"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
}

export default DownloadButton;
