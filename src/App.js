//import logo from './logo.svg';
import "./App.css";
import MainPageComponent from "./main/index.js";
import UploadPageComponent from "./upload";
import ProductPageComponent from "./product";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="/images/icons/logo.png" alt="logo" />
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductPageComponent />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPageComponent />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
