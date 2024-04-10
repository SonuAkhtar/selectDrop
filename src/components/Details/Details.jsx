import React from "react";

const Details = ({ detailData }) => {
  return (
    <div className="details_wrapper">
      <ul>
        {detailData.map((el, i) => {
          return <li key={i}>{el.ability.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Details;
