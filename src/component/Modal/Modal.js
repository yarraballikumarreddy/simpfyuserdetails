/** @format */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import { Input } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { EDIT_USER_DETAILS, USER_DETAILS } from "./../../Redux/Actions/index";
const ModalDialogBox = (props) => {
  const userDetail = useSelector((state) => state.userDetails);
  const isEditClicked = useSelector((state) => state.isEditClicked);
  const dispatch = useDispatch({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { editUserData } = props;
  const { email, phone, username, website, id } = editUserData;
  let intialState = {
    email: email,
    phone: phone,
    username: username,
    website: website,
  };
  const [editForm, setEditForm] = useState(intialState);

  useEffect(() => {
    console.log(editUserData);
    return () => {};
  }, [isEditClicked, editUserData]);

  const handleOk = (e) => {
    const { email, phone, username, website } = editForm;
    const updatedData = userDetail.map((obj) =>
      obj.id === id
        ? {
            ...obj,
            email: email,
            phone: phone,
            username: username,
            website: website,
          }
        : obj
    );
    dispatch({ type: USER_DETAILS, payload: updatedData });
    dispatch({ type: EDIT_USER_DETAILS, payload: false });
  };

  const handleCancel = () => {
    dispatch({ type: EDIT_USER_DETAILS, payload: false });
  };
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };
  return (
    <Modal
      title="Edit Details"
      visible={isEditClicked}
      onOk={(e) => handleOk(e)}
      onCancel={handleCancel}
    >
      <Input
        size="large"
        placeholder="large size"
        onChange={(e) => handleChange(e)}
        name="username"
        value={editForm.username}
        prefix={<UserOutlined />}
      />
      <Input
        size="large"
        placeholder="large size"
        value={editForm.email}
        name="email"
        onChange={(e) => handleChange(e)}
        prefix={<MailOutlined />}
      />
      <Input
        size="large"
        placeholder="large size"
        value={editForm.phone}
        name="phone"
        onChange={(e) => handleChange(e)}
        prefix={<PhoneOutlined />}
      />
      <Input
        size="large"
        placeholder="website"
        name="website"
        value={editForm.website}
        onChange={(e) => handleChange(e)}
        prefix={<GlobalOutlined />}
      />
    </Modal>
  );
};

export default ModalDialogBox;
