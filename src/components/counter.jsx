import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = [];

  const formCount = () => {
    return count ? count : "ноль";
  };
  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count ? "primary" : "danger";
    return classes;
  };

  const renderTags = () => {
    if (tags.length) return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count ? count - 1 : count);
  };

  return (
    <>
      <div>{tags.length === 0 && "Теги не найдены"}</div>
      {renderTags()}
      <span className={getBageClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement()}
        className="btn btn-secondary btn-sm m-1"
      >
        Increment
      </button>
      <button
        onClick={() => handleDecrement()}
        className="btn btn-secondary btn-sm m-1"
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
