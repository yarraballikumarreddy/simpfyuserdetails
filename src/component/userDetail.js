/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { EDIT_USER_DETAILS, USER_DETAILS } from "./../Redux/Actions/index";
import axios from "axios";
import { Col, Card, Skeleton } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartFilled,
  DeleteOutlined,
} from "@ant-design/icons";
import "./userDetail.css";
import ModalDialogBox from "./Modal/Modal";
const UserDetails = (props) => {
  const [isheartClick, setisheartClick] = useState({
    heartActive: false,
    id: 0,
  });
  const [listData, setListData] = useState([]);
  const [editUserData, seteditUserData] = useState({});
  const userDetail = useSelector((state) => state.userDetails);
  const isEditClicked = useSelector((state) => state.isEditClicked);
  const dispatch = useDispatch();

  useEffect(() => {
    setListData(userDetail);
    return () => {};
  }, [userDetail]);

  const heartClick = (propsid) => {
    const { heartActive } = isheartClick;
    setisheartClick({ heartActive: !heartActive, id: propsid });
  };
  const deleteUser = (id) => {
    const remainingUser = listData && listData.filter((item) => item.id !== id);
    dispatch({ type: USER_DETAILS, payload: remainingUser });
  };

  const editUser = (item, id) => {
    seteditUserData(item);
    console.log(item);
    dispatch({ type: EDIT_USER_DETAILS, payload: true });
  };
  return (
    <React.Fragment>
      {listData ?
        listData.map((item, index) => {
          const { email, phone, username, website, id } = item;
          let src = ` https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;
          return (
            <Col xs={24} sm={24} md={8} lg={8} xl={6} key={index}>
              <Card
                className="card"
                style={{ margin: 15 }}
                actions={[
                  <button
                    className="actionButtons"
                    onClick={() => heartClick(id)}
                  >
                    {isheartClick.heartActive && id === isheartClick.id ? (
                      <HeartFilled style={{ color: "red" }} />
                    ) : (
                      <HeartFilled />
                    )}
                  </button>,
                  <button
                    className="actionButtons"
                    onClick={() => editUser(item, id)}
                  >
                    <EditOutlined key="edit" />
                  </button>,
                  <button
                    className="actionButtons"
                    onClick={() => deleteUser(id)}
                  >
                    {<DeleteOutlined />}
                  </button>,
                ]}
                cover={
                  <div className="imgWrapper" style={{ display: "flex" }}>
                    <img
                      src={src}
                      alt={username}
                      height="200px"
                      width="200px"
                    ></img>
                  </div>
                }
              >
                <h3>{username}</h3>
                <section className="sectionWrapper">
                  <div>
                    <MailOutlined /> <span> {email}</span>
                  </div>
                  <div>
                    <PhoneOutlined /> <span>{phone} </span>
                  </div>
                  <div>
                    <GlobalOutlined /> <span>{website} </span>
                  </div>
                </section>
              </Card>
            </Col>
          );
        }):<Skeleton></Skeleton>
      
      }
      {isEditClicked && (
        <ModalDialogBox
          editUserData={editUserData}
        ></ModalDialogBox>
      )}
    </React.Fragment>
  );
};

export default UserDetails;
