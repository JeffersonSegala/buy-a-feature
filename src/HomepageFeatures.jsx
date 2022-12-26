import React, { useState } from 'react';
import './App.css';
import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';
import Feature from './Feature';

export default function HomepageFeatures() {
  const [featureList, setFeatureList] = useState([ 
    { title: 'Cadastro da banana', description: 'bananinhas!', price: 100.00 },
    { title: 'Recebimento via pix parcelado', description: 'isso mesmo, parcelado', price: 700.00 },
    { title: 'Cadastro da banana', description: 'bananinhas!', price: 100.00 },
    { title: 'Recebimento via pix parcelado', description: 'isso mesmo, parcelado', price: 700.00 },
    { title: 'Cadastro da banana', description: 'bananinhas!', price: 100.00 },
    { title: 'Recebimento via pix parcelado', description: 'isso mesmo, parcelado', price: 700.00 },
    { title: 'Cadastro da banana', description: 'bananinhas!', price: 100.00 },
    { title: 'Recebimento via pix parcelado', description: 'isso mesmo, parcelado', price: 700.00 },
    { title: 'Cadastro da banana', description: 'bananinhas!', price: 100.00 },
    { title: 'Recebimento via pix parcelado', description: 'isso mesmo, parcelado', price: 700.00 },
  ]);
  const features = useQuery(query('products').orderByDesc('id'));

  return (
    <div className="feature-container">
      {features && features.map((feature, index) => 
        <Feature feature={feature} key={index} />
      )}
    </div>
  );
}