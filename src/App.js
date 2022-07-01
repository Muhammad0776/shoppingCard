import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import NotFound from "./components/NotFound/NotFound";
import ProductComponents from "./components/ProductComponents";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" component={ProductComponents} exact />
        <Route path="/product/:productId" component={ProductDetails} exact />
        <Route path="/" component={ProductList} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
