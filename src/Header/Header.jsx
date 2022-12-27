import React, { useState } from 'react';
import './style.css';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { logout } from 'thin-backend';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import TransferModal from '../TransferModal/transferModal';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Constants from '../Constants';
import HomeIcon from '@mui/icons-material/Home';
import { Tooltip } from '@mui/material';

const Header = ({ user, page, setPage }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBuy = () => {
    setOpen(false);
  };
  
  const formatedBalance = () => {
    return `Saldo: $ ${user?.balance.toLocaleString('pt-br', {minimumFractionDigits: 2})}`
  }

  return (
    <div className="header-container">
      <div className="header-left-container">
        <div className="header-transfer">
          <CurrencyExchangeOutlinedIcon onClick={handleOpen} />
        </div>
        <div className="header-balance">
          {formatedBalance()}
        </div>
        <div className='header-page-button'>
        {page === Constants.PAGES.FEATURES ?
          <Tooltip title="Ver minhas compras">
            <LocalGroceryStoreIcon 
              fontSize="small" 
              onClick={() => setPage(Constants.PAGES.DEAL_HISTORY)} />
          </Tooltip>
        : <></>}
        {page === Constants.PAGES.DEAL_HISTORY ?
          <Tooltip title="Início">
            <HomeIcon 
              fontSize="small" 
              onClick={() => setPage(Constants.PAGES.FEATURES)} />
          </Tooltip>
        : <></>}
        </div>
      </div>
      <div className="header-user" >
        <span>Olá, {user?.name}</span>
        <AccountCircleOutlined onClick={logout} style={{marginLeft: '10px'}}/>
      </div>
      <TransferModal 
        user={user}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleConfirm={handleBuy}
        />
    </div>
  );

}

export default Header