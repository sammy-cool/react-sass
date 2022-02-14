import React from "react";
import "./App.scss";

const Card = ({ user }) => {
  return (
    <div className="card2">
      <img
        className="img"
        src="https://assets.picspree.com/variants/7XgfSxN3xhWooJrBa2QzZRng/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d"
        alt="img"
      />
      <h2>{user.name}</h2>
      <p>{user.company.name}</p>
      <button>Connect</button>
    </div>
  );
};

export default Card;
