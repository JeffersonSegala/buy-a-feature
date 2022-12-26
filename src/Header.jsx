import React from 'react';
import './App.css';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { logout } from 'thin-backend';

const Header = ({ user }) => {

  const formatedBalance = () => {
    return `Saldo: $ ${user?.balance.toLocaleString('pt-br', {minimumFractionDigits: 2})}`
  }

  return (
    <div className="header-container">
      <div className="header-balance">
        {formatedBalance()}
      </div>
      <div className="header-user" >
        <span>Olá, Kanandita {user?.email}</span>
        <AccountCircleOutlined onClick={logout} style={{marginLeft: '10px'}}/>
      </div>
    </div>
  );

}

export default Header