import React, { Component, useState, useEffect, useHistory } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import List from "./List";
import Detailscomponent from "./Details";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import "./main.css";
const { Header } = Layout;

const Api = (props) => {
  const [loading, setLoading] = React.useState(true);
  const [currentComponent, setcurrentComponent] = React.useState(null);
  const [dataSource, setdataSource] = useState([]);

  const handleDetails = (record) => {
    setcurrentComponent(record);
  };
  useEffect(() => {
    const axios = require("axios");

    axios
      .get(
        "https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&accepted=True&pagesize=100&site=stackoverflow&filter=!LYA)N_IxWA0PMw70d8nTTe"
      )
      .then((resp) => {
        console.log(resp.data && resp.data.items);
        setdataSource(resp.data && resp.data.items);
        setcurrentComponent(resp.data && resp.data.items[0]);
        setLoading(false);
      })
      .catch(() => {});
  }, []);

  return (
    <Layout>
      <LoadingMask loading={loading} text={"loading..."}>
        <div className="details">
          <div className="main-header">
            <h1 className="main-header-title">Code Over Flow</h1>
            <h1 className="main-header-right">Tags</h1>
          </div>
          <List
            dataSource={dataSource}
            handleDetails={handleDetails}
            loading={loading}
          />
        </div>
      </LoadingMask>
    </Layout>
  );
};

export default Api;
