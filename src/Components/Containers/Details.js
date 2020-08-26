import React, { Component, useState, useEffect, useHistory } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
const Details = (props) => {
  console.log(props.editContent && props.editContent.body);
  const html = ReactHtmlParser(props.editContent && props.editContent.body);
  console.log(html);

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
