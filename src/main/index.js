import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get("http://localhost:8080/products")
      .then((result) => {
        console.log(result);
        const products = result.data.products;
        setProducts(products);
      })
      .catch((error) => {
        console.error("에러발생 :", error);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="images/banners/banner1.png" alt="banner" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map((product, index) => {
          const keyValue = index + 1;
          const name = product.name;
          const price = product.price;
          const seller = product.seller;

          return (
            <div className="product-card" key={`${keyValue}`}>
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img
                    className="product-img"
                    src={product.imageUrl}
                    alt="product-img"
                  />
                </div>
                <div className="product-contents">
                  <span className="product-name">
                    {`${keyValue}`} .{`${name}`}
                  </span>
                  <span className="product-price">{`${price}`}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                      alt="avatar"
                    />
                    <span>{`${seller}`}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MainPage;
