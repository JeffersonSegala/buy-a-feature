import './App.css';
import Features from './Features/Features';
import { useCurrentUser } from 'thin-backend-react';
import { updateRecord, createRecord } from 'thin-backend';
import { useState } from 'react';
import ConfirmModal from './ConfirmModal';
import Header from './Header/Header';
import { query } from 'thin-backend';
import { useQuery } from 'thin-backend-react';
import { Snackbar } from '@mui/material';
import Dealhistory from './DealHistory/DealHistory';
import Constants from './Constants';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [open, setOpen] = useState(false);
  const [feature, setFeature] = useState(false);
  const [page, setPage] = useState(Constants.PAGES.FEATURES);
  const user = useCurrentUser();
  const features = useQuery(query('products').orderByDesc('id'));
  
  const handleOpen = (feature) => {
    setOpen(true);
    setFeature(feature);
  };

  const handleCloseBuyConfirmation = () => {
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
    handleCloseBuyConfirmation();
    setShowMessage(true);
  }

  return (
    <div className="App">
      <Header user={user} page={page} setPage={setPage} />

      {page === Constants.PAGES.FEATURES ?
        <Features 
          features={features} 
          handleBuy={handleOpen} />
      : <></>}
      {page === Constants.PAGES.DEAL_HISTORY ?
        <Dealhistory 
          features={features}
          user={user} />
      : <></>}

      <ConfirmModal 
        open={open}
        handleOpen={handleOpen}
        handleClose={handleCloseBuyConfirmation}
        handleConfirm={handleBuy}
        />
      <Snackbar
        open={showMessage}
        autoHideDuration={3000}
        onClose={() => setShowMessage(false)}
        message="Compra efetuada"
        action={<></>}
      />
    </div>
  );
}

export default App;
