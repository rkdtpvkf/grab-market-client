//import logo from './logo.svg';
import "./App.css";
import MainPageComponent from "./main/index.js";
import UploadPageComponent from "./upload";
import ProductPageComponent from "./product";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/product">
          <ProductPageComponent />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPageComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
