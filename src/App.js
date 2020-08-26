import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home';
import Signin from './views/Signin';

function App() {
  return (
    <div className="App">
		<Router>
			<Navbar />
			<Route exact path="/" component={Home} />
			<Route path="/signin" component={Signin}/>
			<Footer />
		</Router>		
		
    </div>
  );
}

export default App;