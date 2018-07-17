import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageSrc, box}) => {
  return (
    <div className="center ma">
      <div className="absolute mt2 mb2">
        <img
          id="inputimage"
          alt='' src={imageSrc}
          width="500px"
          height="auto"
          />
        <div className="bounding-box" style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol
        }} >
        </div>
      </div>
    </div>
  );
}

export default FaceRecognition;
