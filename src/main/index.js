import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://49c25442-f9db-49fe-adfb-d51a9c633d97.mock.pstmn.io/products"
      )
      .then(function (result) {
        console.log(result);
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러발생 :", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="logo" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="banner" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card" key={index + 1}>
                <Link className="product-link" to="/product">
                  <div>
                    <img
                      className="product-img"
                      src={product.imageUrl}
                      alt="product-img"
                    />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">
                      {index + 1} .{product.name}
                    </span>
                    <span className="product-price">{product.price}원</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                        alt="avatar"
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}
export default MainPage;
