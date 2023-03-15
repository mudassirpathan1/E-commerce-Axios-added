import React from "react";
import { Route, useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const params = useParams();
  console.log(params.productId);
  return (
    
    <section>
      <h1>Product Details</h1>
      
      <Route path="/store/a1">
        <section className="product-box">
        <h2>BLIVE Printed Men Round Neck Full Sleeve T-Shirt</h2>
      <p>
        Mens Full sleeve T-shirts from Blive Clothing Store. These T-shirts can
        be worn as a Daily wear, or can be worn during your Morning walk,
        Running/Jogging and also during your Exercise and Workouts in the Gym.
        These can also be worn as a Casual Wear for all your Outings. Fill your
        wardrobe with these awesome collections and make your day to day more
        special.
      </p>
          <div className="images">
            <img src="/images/a1-1.jpg" alt="" />
            
            <img src="/images/a1-2.jpg" alt="" />
            <img src="/images/a1-3.jpg" alt="" />
            <img src="/images/a1-4.jpg" alt="" />
          </div>
        </section>
      </Route>
      <Route path="/store/a2">
      <section className="product-box">
        <center><h2>Urbano Fashion Men's Printed Full Sleeve Slim Fit Cotton T-Shirt</h2>
      <p>
        Mens Full sleeve T-shirts from Blive Clothing Store. These T-shirts can
        be worn as a Daily wear, or can be worn during your Morning walk,
        Running/Jogging and also during your Exercise and Workouts in the Gym.
        These can also be worn as a Casual Wear for all your Outings. Fill your
        wardrobe with these awesome collections and make your day to day more
        special.
      </p></center>
          <div className="images">
            <img src="/images/a2-1.jpg" alt="" />

            <img src="/images/a2-2.jpg" alt="" />
            <img src="/images/a2-3.jpg" alt="" />
            <img src="/images/a2-4.jpg" alt="" />
          </div>
        </section>
      </Route>
      <Route path="/store/a3">
      <section className="product-box">
        <h2>CHKOKKO Winter Wear Cotton Plain Full Sleeve Turtle Neck T Shirt for Men</h2>
      <p>
        Mens Full sleeve T-shirts from Blive Clothing Store. These T-shirts can
        be worn as a Daily wear, or can be worn during your Morning walk,
        Running/Jogging and also during your Exercise and Workouts in the Gym.
        These can also be worn as a Casual Wear for all your Outings. Fill your
        wardrobe with these awesome collections and make your day to day more
        special.
      </p>
          <div className="images">
            <img src="/images/a3-1.jpg" alt="" />
            <img src="/images/a3-2.jpg" alt="" />
            <img src="/images/a3-3.jpg" alt="" />
            <img src="/images/a3-4.jpg" alt="" />
          </div>
        </section>
      </Route>
      <Route path="/store/a4">
      <section className="product-box">
        <h2>LEOTUDE Cotton Blend Half Sleeve Back Print Oversized T-Shirts for Men</h2>
      <p>
        Mens Full sleeve T-shirts from Blive Clothing Store. These T-shirts can
        be worn as a Daily wear, or can be worn during your Morning walk,
        Running/Jogging and also during your Exercise and Workouts in the Gym.
        These can also be worn as a Casual Wear for all your Outings. Fill your
        wardrobe with these awesome collections and make your day to day more
        special.
      </p>
          <div className="images">
            <img src="/images/a4-1.jpg" alt="" />
            <img src="/images/a4-2.jpg" alt="" />
            <img src="/images/a4-3.jpg" alt="" />
            <img src="/images/a4-3.jpg" alt="" />
          </div>
        </section>
      </Route>
    </section>
  );
};

export default ProductDetail;