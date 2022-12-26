import React, { useState } from 'react';
import './App.css';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Feature = ({ feature }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="feature-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
      <div></div>
      <div className="feature-title" >{feature.title}</div>
      <div className="feature-description" >{isHovering ? feature.description : ''}</div>
      <div className={isHovering ? "feature-price__hovering" : "feature-price"} >
        {`$ ${feature.price}`}
        {isHovering ? <a href="#" class="feature-buy-button">
          <LocalGroceryStoreIcon />Comprar</a> : ''}
      </div>
    </div>
  );

}

export default Feature