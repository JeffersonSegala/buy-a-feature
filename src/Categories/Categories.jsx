import React from 'react';
import './style.css';
import { Paper, ToggleButton, ToggleButtonGroup } from '@mui/material';

const Categories = ({ categories, selectedCategory, handleSelectCatagory }) => {
  
  return (
    <Paper variant="outlined" >
      <ToggleButtonGroup
        value={selectedCategory}
        exclusive
        color="success"
        onChange={handleSelectCatagory}
        size="small"
        aria-label="categorias" >
        {categories?.map(category => 
          <ToggleButton key={category} value={category} aria-label="left aligned">
            {category}
          </ToggleButton>  
        )}
      </ToggleButtonGroup>
    </Paper>
  );

}

export default Categories