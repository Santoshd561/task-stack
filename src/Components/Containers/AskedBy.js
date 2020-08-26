import React, { Component, useState, useEffect, useHistory } from "react";
import "antd/dist/antd.css";
import "./main.css";
import { Avatar } from "antd";
import { Tooltip } from "antd";

const Owner = (props) => {
  console.log(props.owner);

  return (
    <div className="card">
      <Avatar shape="square" size={20} src={props.owner.profile_image} />
      <a href={props.owner.link}>
        {" "}
        <h6>{props.owner.display_name}</h6>
      </a>
      <Tooltip title="Reputation Score">
        <h6>{props.owner.reputation}</h6>
      </Tooltip>
    </div>
  );
};

export default Owner;
