import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';

function App() {
  return (
    <>
    <div>
      <Header />
    </div>
      <Outlet />
    </>
  );
}

export default App;
