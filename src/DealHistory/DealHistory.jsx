import { useEffect, useState } from 'react';
import './style.css';
import { query } from 'thin-backend';

const Dealhistory = ({ features, user }) => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    query('deals').whereNot('id', user?.id).orderByDesc('createdAt').fetch().then(results => {
      setDeals(results)
    })
  }, [user?.id]);

  return (
    <div className='dealHistory-container'>
      <h1>Minhas compras</h1>
      <ul>
      {deals?.map(deal => {
        return <li key={deal.id} >{features.find(f => f.id === deal.productsId).title}</li>
      })}
      </ul>
    </div>
  );

}

export default Dealhistory