import React from 'react';
import './App.css';
import Feature from './Feature';

const Features = ({ features, handleBuy }) => {
  return (
    <div className="feature-container">
      {features?.map((feature, index) => {
        return <Feature 
          feature={feature} 
          handleBuy={handleBuy} 
          key={index} />
      })}
    </div>
  );
}

export default Features