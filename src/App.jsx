import './App.css';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import Features from './Features';
import { useCurrentUser } from 'thin-backend-react';
import { updateRecord, createRecord, logout } from 'thin-backend';

function App() {
  const user = useCurrentUser();

  const buyFn = (feature) => {
    const newBalance = user.balance - feature.price;
    if (newBalance < 0) {
      return;
    }
    createRecord('deals', { userId: user.id, productsId: feature.id });
    updateRecord('users', user.id, { balance: newBalance });
  }

  const header = () => {
    return <div className="header-container">
      <div className="header-balance">
        Saldo: $ {user?.balance.toLocaleString('pt-br', {minimumFractionDigits: 2})}
      </div>
      <div className="header-user" >
        <span>Olá, Kanandita {user?.email}</span>
        <AccountCircleOutlined onClick={logout} style={{marginLeft: '10px'}}/>
      </div>
    </div>
  }

  return (
    <div className="App">
      {header()}
      <Features buyFn={buyFn} />
    </div>
  );
}

export default App;
