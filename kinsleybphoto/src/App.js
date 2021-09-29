
import './App.css';
import HomePage from './containers/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NavTest from './components/NavTest'

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        {/* <Navbar />  */}
          <NavTest /> 
          <Route exact path='/' component={HomePage} /> 
          {/* <Route exact path='/galleries' component={GalleriesPage} />
          <Route exact path='/booking' component={BookingPage} /> 
          <Route exact path='/about' component={AboutMePage} /> 
         */}
          <Footer /> 
    </Router>
  );
}

export default App;
