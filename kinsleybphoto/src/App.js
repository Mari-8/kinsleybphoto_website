
import './App.css';
import HomePage from './containers/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar /> 
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
