import React, { Component, useState, useEffect, useHistory } from "react";

const Details = (props) => {
  console.log(props.editContent && props.editContent.body);

  return (
    <div
      style={{
        width: 800,
        height: 600,
        padding: 20,
        marginLeft: 80,
      }}
    >
      {props.editContent && (
        <div className="details">
          <h1>QUESTIONS</h1>
          <h6>{props.totalCount}</h6>
          <div className="page"></div>
        </div>
      )}
    </div>
  );
};
export default Details;
