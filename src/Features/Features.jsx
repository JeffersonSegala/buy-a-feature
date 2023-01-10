import React from 'react';
import './style.css';
import Feature from './Feature';

const Features = ({ features, handleOpenPurchase }) => {
  return (
    <div className="feature-container">
      {features?.map((feature, index) => {
        return <Feature 
          feature={feature} 
          handleOpenPurchase={handleOpenPurchase} 
          key={index} />
      })}
    </div>
  );
}

export default Features