import React from "react";
import { Link } from "react-router-dom";

import './info.css'
function Infos() {
  return (
    <div>
      <div className="infos-content">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number</p>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Vanessa Mint" required />

          <label htmlFor="name">Email Address</label>
          <input type="text" placeholder="VanessaMint@" required />

          <label htmlFor="name">Phone Number</label>
          <input type="text" placeholder="e.g 0544993066" required />
        </form>
        <button className="btn"><Link to='./plan'>Next Step</Link></button>
      </div>
    </div>
  );
}

export default Infos;
