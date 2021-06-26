import React from "react";

import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

import Link from "../common/Link";
import Bottom from "../common/Bottom";
import Title from "../common/Title";


import "../stylesheet/Follow.css";

function Follow() {
  return (
    <>
      <Title id="Follow">Suivez-moi</Title>
      <Bottom>
        <Link
          href="https://www.linkedin.com/in/mamednoorgohabur/"
          target="_blank"
          rel="noopener noreferrer"
          >
          <LinkedinOutlined style={{ fontSize: "70px", color: "white" }} className="icons"/>
        </Link>
        <Link
          href="https://github.com/Mamednoor"
          target="_blank"
          rel="noopener noreferrer"
          >
          <GithubOutlined style={{ fontSize: "70px", color: "white" }} className="icons"/>
        </Link>
        <Link
          href="mailto:mamed.gohabur@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          >
          <MailOutlined style={{ fontSize: "70px", color: "white" }} className="icons"/>
        </Link>
      </Bottom>
    </>
  );
}
export default Follow;
