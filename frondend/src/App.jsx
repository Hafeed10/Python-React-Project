import './App.css';
import AddProduct from './compones/AddProdect';
import NavbarMenu from './compones/NavbarMenu';
import ShowProducts from './compones/ShowProducts';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavbarMenu/>
        <Route exact path='/' component={ShowProducts} />
        <Route exact path='/addProduct' component={AddProduct} />
      </Router>
    </div>
  );
}

export default App;
