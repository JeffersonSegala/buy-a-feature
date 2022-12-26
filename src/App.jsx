import './App.css';
import Features from './Features';
import { useCurrentUser } from 'thin-backend-react';
import { updateRecord, createRecord } from 'thin-backend';
import { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import Header from './Header';
import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';

function App() {
  const [open, setOpen] = useState(false);
  const [feature, setFeature] = useState(false);
  const user = useCurrentUser();
  const features = useQuery(query('products').orderByDesc('id'));
  // const deals = useQuery(query('deals').where('userId', user?.id).orderByDesc('id'));
  
  const handleOpen = (feature) => {
    setOpen(true);
    setFeature(feature);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBuy = () => {
    const newBalance = user.balance - feature.price;
    if (newBalance < 0) {
      return;
    }
    createRecord('deals', { userId: user.id, productsId: feature.id });
    updateRecord('users', user.id, { balance: newBalance });
    features.find(f => f.id === feature.id).isBought = true
    handleClose();
  }

  return (
    <div className="App">
      <Header user={user} />
      <Features 
        features={features} 
        handleBuy={handleOpen} />
      <ConfirmModal 
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleConfirm={handleBuy}
        />
    </div>
  );
}

export default App;
