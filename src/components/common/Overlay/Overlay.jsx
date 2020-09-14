import React from "react";
import "./Overlay.css";

//assets
import logo from '../../../assets/images/logo.png'

function Overlay({ loading }) {
  if (loading) {
    return (
      <div className="overlay">
        <header className="overlay-header">
          <img src={logo} className="overlay-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Overlay;
