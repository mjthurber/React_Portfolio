import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
    <div>
      <Header />
    </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
