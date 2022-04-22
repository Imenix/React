import React from "react";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <div className="nav-bar">
      <section>
        <nav>
          <Link to="/Home">
            <button className="nav-button">Home</button>
          </Link>
          <Link to="/Pokemon">
            <button className="nav-button">PokeManager</button>
          </Link>
          <Link to="/Team">
            <button className="nav-button">Team</button>
          </Link>
        </nav>
      </section>
    </div>
  );
};

export default navBar;
