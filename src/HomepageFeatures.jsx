import React, { useState } from 'react';
import './App.css';

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

  const toggleCard = (feature) => {
    feature.isOpen = !feature.isOpen
  }
  
  const Feature = ({feature}) => {
    return <div className="feature-card" onClick={() => toggleCard(feature)} >
        <div></div>
        <div className="feature-title" >{feature.title}</div>
        <div className="feature-price" >{`$ ${feature.price}`}</div>
      </div>
  }

  return (
    <div className="feature-container">
      {featureList.map((feature, index) => 
        <Feature feature={feature} key={index} />
      )}
    </div>
  );
}