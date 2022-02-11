/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Row } from "antd";

import Spinner from "./component/Spinner/Spinner";
import UserDetails from "./component/userDetail";
import { userApi } from "./en";
import { USER_DETAILS } from "./../src/Redux/Actions/index";
import "./App.css";
import "antd/dist/antd.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(userApi)
      .then((res) => {
        setLoading(true);
        const resData = res.data;
        dispatch({ type: USER_DETAILS, payload: resData });
      })
      .catch(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <React.Fragment>
      {loading ? (
        <Row>
          <UserDetails></UserDetails>
        </Row>
      ) : (
        <Spinner></Spinner>
      )}
    </React.Fragment>
  );
};

export default App;
