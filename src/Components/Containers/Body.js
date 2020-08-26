import React, { Component, useState, useEffect, useHistory } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import "antd/dist/antd.css";
import "./main.css";

const Body = (props) => {
  //   console.log(ReactHtmlParser(props.body));
  const html = ReactHtmlParser(props.body);

  return (
    <div
      className="inner-html"
      dangerouslySetInnerHTML={{ __html: `${props.body}` }}
    />
  );
};

export default Body;
