import React from 'react';
import './App.css';
import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';
import Feature from './Feature';

export default function HomepageFeatures() {
  const features = useQuery(query('products').orderByDesc('id'));

  return (
    <div className="feature-container">
      {features && features.map((feature, index) => 
        <Feature feature={feature} key={index} />
      )}
    </div>
  );
}