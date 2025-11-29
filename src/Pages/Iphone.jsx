import React, { useState, useEffect } from "react";
import { data, Link } from "react-router-dom";
import iphoneSE from "../assets/images/home/Appele-iphoneSE.jpg"

function Iphone() {
  const [products, setProducts] = useState([]); // MUST start as empty array

  useEffect(() => {
    fetch("/iphoneData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // backend returns an array
      })
      .catch((err) => console.log("Fetch error:", err));
  }, []);
console.log(products)

  let order = 1;

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold mt-5 pt-5">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>

          {products.length === 0 && (
            <h2 className="text-center mt-5">Loading products...</h2>
          )}

          {products.map((product) => {
            let id = product.product_id;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brif_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;

            let order1 = 1;
            let order2 = 2;

            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            return (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">Starting at {StartPrice}</div>
                  <div className="monthly-price">{PriceRange}</div>

                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`/iphone/${title}`}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
