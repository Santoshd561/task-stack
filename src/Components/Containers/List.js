import React, { Component, useState, useEffect, useHistory } from "react";
import "antd/dist/antd.css";
import { List, Avatar, Space } from "antd";
import LoadingMask from "react-loadingmask";
import Body from "./Body";
import "react-loadingmask/dist/react-loadingmask.css";
import Votes from "./Votes";
import Tags from "./Tags";
import Owner from "./AskedBy";
import "./main.css";

const Listitem = (props) => {
  return (
    <div className="App">
      <h1 className="App-title">ALL QUESTIONS</h1>
      <h1 className="App-intro">{props.dataSource.length} questions</h1>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={props.dataSource}
        renderItem={(item) => (
          <List.Item
            style={{ margin: "2%" }}
            key={item.title}
            // extra={
            //   <img
            //     width={272}
            //     alt="logo"
            //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            //   />
            // }
          >
            <List.Item.Meta
              //   avatar={<Avatar src={item.avatar} />}
              description={
                <>
                  <Body body={item.body} />
                  <Votes
                    up_vote_count={item.up_vote_count}
                    answer_count={item.answer_count}
                    view_count={item.view_count}
                  />
                  <Owner owner={item.owner} />
                  <Tags dataSource={item.tags} />
                </>
              }
              title={<a href={item.href}>{item.title}</a>}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Listitem;
