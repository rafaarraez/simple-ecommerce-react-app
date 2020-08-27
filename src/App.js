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
import Profile from './views/Profile';
import NewProduct from './views/NewProduct';
import GlobalStyles from './components/globalStyles/globalStyles';

function App() {
  return (
    <div className="App">
		<Provider store={store}>
			<Router>
				<GlobalStyles />
				<Navbar />
				<Route exact path="/" component={Home} />
				<Route path="/signin" component={Signin}/>
				<Route path="/register" component={Register}/>
				<Route path="/product/:id" component={Product}/>
				<Route path="/products" component={ProductsList}/>
				<Route path="/profile" component={Profile}/>
				<Route path="/new-product" component={NewProduct}/>
				<Footer />
			</Router>
		</Provider>	
		
    </div>
  );
}

export default App;