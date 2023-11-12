import React from "react";

function Sushi({ sushi, eatSushi }) {

  const {id, name, img_url, price } = sushi

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {sushi.eaten ? null : (
          <img
            id={id}
            src={img_url}
            alt={name}
            width="100%"
            data-price={price}
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
