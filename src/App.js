import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './page/About';
import Home from './page/Home';
import Navbar from './Componet/Navbar';
import Footer from './Componet/Footer';
import Explore from './page/Explore';
import Blog from './page/Blog';
import User from './page/User';
import Product from './page/product';



function App() {
  return (
      <div>
    <Router>
        <Navbar />
        <Switch>
         
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/Explore">
            <Explore />
          </Route>
          <Route path="/User">
            <User />
          </Route>
          <Route path='/product/:id'>
            <Product />
          </Route>
        </Switch>
        <Footer />
    </Router>
      </div>
  );
}

export default App;
