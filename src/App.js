import "./App.css";
import MainPageComponent from "./main/index.js";
import UploadPageComponent from "./upload";
import ProductPageComponent from "./product";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link className="home-link" to={`/`}>
            <img src="/images/icons/logo.png" alt="logo" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            Upload Item
          </Button>
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
