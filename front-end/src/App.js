import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./Pages/Success";


const App = () => {
  const user = true
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/products/:category" element={<ProductList />}/>
      <Route path="/product/:id" element={<Product />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/success" element={<Success />}/>

        
      {/* <Route path="/success" element={<Success />}/> */}
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
      <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
    </Routes>
  </Router>
  )
};

export default App;