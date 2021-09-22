import React from "react";
// import PropTypes from "prop-types";

const FoodILike = [
  {
    name: "abc",
    age: 19,
  },
  {
    name: "bds",
    age: 12,
  },
  {
    name: "zxcv",
    age: 13,
  },
  {
    name: "qwer",
    age: 17,
  },
];

function App_func() {
  return (
    <div>
      {FoodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

function Food({ name, image }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={image} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: <propTypes className="string" required></propTypes>,
};
export default App_func;
