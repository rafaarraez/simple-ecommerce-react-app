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
import PrivateRoutes from './components/privateRoutes/privateRoutes';
import AdminRoutes from './components/privateRoutes/adminOnlys/adminnOnlys';

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
				<PrivateRoutes path="/profile" component={Profile}/>
				<AdminRoutes path="/products" component={ProductsList}/>
				<AdminRoutes path="/new-product" component={NewProduct}/>
				<Footer />
			</Router>
		</Provider>	
		
    </div>
  );
}

export default App;