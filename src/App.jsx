// import logo from './logo.svg';
import './App.css';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import HomepageFeatures from './HomepageFeatures';
// import { logout } from 'thin-backend';
import { useCurrentUser } from 'thin-backend-react';

function App() {
  const user = useCurrentUser();

  const header = () => {
    return <div className="header-container">
      <div className="header-balance">
        Saldo: $1.000,00
      </div>
      <div className="header-user" >
        <span>Olá, Kanandita {user?.email}</span>
        <AccountCircleOutlined style={{marginLeft: '10px'}}/>
      </div>
    </div>
  }

  return (
    <div className="App">
      {header()}
      <HomepageFeatures />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
