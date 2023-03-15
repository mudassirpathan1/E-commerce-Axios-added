import React from "react";
import Header from "../components/Header";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-page">
        <Header />

        <h1>The Generics</h1>
        <button className="latest-album">Get our Latest Album</button>
        <button className="play-button">▶</button>
      </div>
      <h1 className="tour-title">TOURS</h1>
      <div className="tour-list">
        <div className="tour-item">
          <span className="tour-date">JUL16</span>
          <span className="tour-place">DETROIT, MI</span>
          <span className="tour-venue">DTE ENERGY MUSIC THEATRE</span>
          <button className="buy-btn">BUY TICKETS</button>
        </div>
        <div className="tour-item">
          <span className="tour-date">JUL19</span>
          <span className="tour-place">TORONTO,ON</span>
          <span className="tour-venue">BUDWEISER STAGE</span>
          <button className="buy-btn">BUY TICKETS</button>
        </div>
        <div className="tour-item">
          <span className="tour-date">JUL 22</span>
          <span className="tour-place">BRISTOW, VA</span>
          <span className="tour-venue">JIGGY LUBE LIVE</span>
          <button className="buy-btn">BUY TICKETS</button>
        </div>
        <div className="tour-item">
          <span className="tour-date">JUL 29</span>
          <span className="tour-place">PHOENIX, AZ</span>
          <span className="tour-venue">AK-CHIN PAVILION</span>
          <button className="buy-btn">BUY TICKETS</button>
        </div>
        <div className="tour-item">
          <span className="tour-date">AUG 2</span>
          <span className="tour-place">LAS VEGAS, NV</span>
          <span className="tour-venue">T-MOBILE ARENA</span>
          <button className="buy-btn">BUY TICKETS</button>
        </div>
        <div className="tour-item">
          <span className="tour-date">AUG 7</span>
          <span className="tour-place">CONCORD, CA</span>
          <span className="tour-venue">CONCORD PAVILION</span>
          <button className="buy-btn">BUY TICKETS</button>
        </div>
      </div>
      <footer>
        <h1>The Generics</h1>
      </footer>
    </div>
  );
};

export default Home;
