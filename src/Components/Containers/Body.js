import React, { Component, useState, useEffect, useHistory } from "react";
import "antd/dist/antd.css";
import "./main.css";

const Body = (props) => {
  return (
    <div
      className="inner-html"
      dangerouslySetInnerHTML={{ __html: `${props.body}` }}
    />
  );
};

export default Body;
