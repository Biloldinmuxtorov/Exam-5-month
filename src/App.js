// import {lazy, Suspense} from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './assets/styles/main.scss';
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage/Product.jsx";
import SinglePage from "./pages/SinglePage/SinglePage";
import Registr from './pages/Regist';
import AddPage from './pages/AddPage/AddPage';
import RadioPage from './pages/RadioPage/RadioPage';




function App() {
    return (
        <div className="App">
            <Router>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/singlepage" component={SinglePage}/>
                    <Route path="/login" component={Registr}/>

                    <Route path="/addpage" component={AddPage}/>
                    <Route path="/radiopage" component={RadioPage}/>
                    <Route path="/products" component={ProductsPage}/>
                </Switch>

            </Router>
        </div>
    );
}

export default App;
