import React, { useState } from 'react';
import './App.css';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Feature = ({ feature, buyFn, isBought }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false); 
  };

  return (
    <div className={isBought ? 'feature-card feature-card__bought' : 'feature-card'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
      <div></div>
      <div className="feature-title" >{feature.title}</div>
      <div className="feature-description" >{isHovering ? feature.description : ''}</div>
      <div className={isHovering ? "feature-price__hovering" : "feature-price"} >
        {`$ ${feature.price}`}
        <span onClick={() => buyFn(feature)} className={isHovering ? "feature-buy-button" : "hidden"}>
          <LocalGroceryStoreIcon />Comprar
        </span> 
      </div>
    </div>
  );

}

export default Feature