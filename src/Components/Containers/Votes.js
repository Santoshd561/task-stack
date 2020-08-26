import React, { Component, useState, useEffect, useHistory } from "react";
import "antd/dist/antd.css";
import "./main.css";

const Body = (props) => {
  console.log(props);
  return (
    <div className="details-column">
      <div className="details-column">
        {props.up_vote_count} <h5>votes</h5>
      </div>
      <div className="details-column">
        {props.answer_count} <h5>answers</h5>
      </div>
      <div className="details-column">
        {props.view_count}
        <h5> views</h5>
      </div>
    </div>
  );
};

export default Body;
