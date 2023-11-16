import React from 'react';
import './styles.scss';

const HeroBanner = ({ src, text }) => {
  return (
    <div className="HeroBanner__Container">
      <img src={src} alt="cats" width="100%" className="HeroBanner__Image" />
      {text && (
        <div className="HeroBanner__TextWrapper">
          <p className="HeroBanner__Text">{text}</p>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
