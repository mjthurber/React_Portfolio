import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';

import './index.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'About', element: <About /> },
      { path: 'Contact', element: <Contact /> },
      { path: 'Portfolio', element: <Portfolio /> },
      { path: 'Resume', element: <Resume /> }
    ]
  }
]);


ReactDOM
.createRoot(document.getElementById('root'))
.render(<RouterProvider router={router} />
)
