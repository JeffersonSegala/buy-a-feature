import React, { useEffect } from 'react';
import './App.css';
import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';
import Feature from './Feature';

export default function Features({ buyFn }) {
  const features = useQuery(query('products').orderByDesc('id'));
  const deals = useQuery(query('deals').orderByDesc('id'));

  useEffect(() => {
    console.log('deals', deals)
  }, [deals]);

  return (
    <div className="feature-container">
      {features?.map((feature, index) => 
        <Feature 
          feature={feature} 
          buyFn={buyFn} 
          isBought={deals?.find(deal => deal.productsId === feature.id)}
          key={index} />
      )}
    </div>
  );
}