import React from "react";
import '../style/detailsRow.css'

export const MovieDetailsRow = (props) => {
  return (
    <div className="datail-row-container">
      <h1 className="title" >{props.title}</h1>
      <h1 className="detail">{props.detail}</h1>
    </div>
  );
};
