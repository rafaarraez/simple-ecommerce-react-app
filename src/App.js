import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home';
import Signin from './views/Signin';
import Register from './views/Register';
import Product from './views/Product';
import ProductsList from './views/ProductsList';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
		<Provider store={store}>
			<Router>
				<Navbar />
				<Route exact path="/" component={Home} />
				<Route path="/signin" component={Signin}/>
				<Route path="/register" component={Register}/>
				<Route path="/product/:id" component={Product}/>
				<Route path="/products" component={ProductsList}/>
				<Footer />
			</Router>
		</Provider>	
		
    </div>
  );
}

export default App;