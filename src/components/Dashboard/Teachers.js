import React from "react";
import "antd/dist/antd.css";
import { Table, Tag, Space } from "antd";

const dataSource = [
  {
    key: 1,
    name: "Srinivasa rao",
    phone: "+91 7337416337",
    email: "guardian@gmail.com",
    class: "4th & 5th class",
    action: "",
  },
  {
    key: 2,
    name: "Srinivasa rao",
    phone: "+91 7337416337",
    email: "guardian@gmail.com",
    class: "4th & 5th class",
    action: "",
  },
  {
    key: 3,
    name: "Srinivasa rao",
    phone: "+91 7337416337",
    email: "guardian@gmail.com",
    class: "4th & 5th class",
    action: "",
  },
  {
    key: 3,
    name: "Srinivasa rao",
    phone: "+91 7337416337",
    email: "guardian@gmail.com",
    class: "4th & 5th class",
    action: "",
  },
  {
    key: 4,
    name: "Srinivasa rao",
    phone: "+91 7337416337",
    email: "guardian@gmail.com",
    class: "4th & 5th class",
    action: "",
  },
  {
    key: 5,
    name: "Srinivasa rao",
    phone: "+91 7337416337",
    email: "guardian@gmail.com",
    class: "4th & 5th class",
    action: "",
  },
  {
    key: 6,
    name: "Srinivasa rao",
    phone: "+91 7337416337",
    email: "guardian@gmail.com",
    class: "4th & 5th class",
    action: "",
  },
  {
    key: 7,
    name: "Srinivasa rao",
    phone: "+91 7337416337",
    email: "guardian@gmail.com",
    class: "4th & 5th class",
    action: "",
  },
  {
    key: 8,
    name: "Srinivasa rao",
    phone: "+91 7337416337",
    email: "guardian@gmail.com",
    class: "4th & 5th class",
    action: "",
  },
  {
    key: 9,
    name: "Srinivasa rao",
    phone: "+91 7337416337",
    email: "guardian@gmail.com",
    class: "4th & 5th class",
    action: "",
  },
  {
    key: 10,
    name: "Srinivasa rao",
    phone: "+91 7337416337",
    email: "guardian@gmail.com",
    class: "4th & 5th class",
    action: "",
  },
  {
    key: 11,
    name: "Srinivasa rao",
    phone: "+91 7337416337",
    email: "guardian@gmail.com",
    class: "4th & 5th class",
    action: "",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email ID",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Class Assigned",
    dataIndex: "class",
    key: "class",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
const Teachers = () => {
  return (
    <div className="Teachers">
      Teachers
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Teachers;
