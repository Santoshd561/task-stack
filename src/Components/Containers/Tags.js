import React, { Component, useState, useEffect, useHistory } from "react";
import "antd/dist/antd.css";
import { List, Tag, Space } from "antd";
import LoadingMask from "react-loadingmask";
import Body from "./Body";
import "react-loadingmask/dist/react-loadingmask.css";
import "./main.css";

const Tags = (props) => {
  console.log(props);

  return (
    <div>
      {props.dataSource.map((val, i) => (
        <Tag>{val}</Tag>
      ))}
    </div>
  );
};

export default Tags;
