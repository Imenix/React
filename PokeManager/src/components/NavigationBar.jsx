import React from "react";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <div>
      <section>
        <nav>
          <button>
            <Link to="/Home">Home</Link>
          </button>
          <button>
            <Link to="/Team">Team</Link>
          </button>
          <button>
            <Link to="/Pokemon">PokeManager</Link>
          </button>
        </nav>
      </section>
    </div>
  );
};

export default navBar;
