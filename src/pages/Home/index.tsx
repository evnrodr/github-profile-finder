import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Input, Button, message } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { UserContext } from "../../contexts/UserContext";

import "./styles.scss";

export function Home() {
  const { user, handleUserChange, searchUser } = useContext(UserContext);
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  async function searchOnKeyPress(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      setLoading(true);
      const status = await searchUser();
      status !== 200
        ? message.error(`User ${user} not found`)
        : history.push(`users/${user}`);
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <div className="searchContainer">
        <Input
          disabled={loading ? true : false}
          type="text"
          size="large"
          placeholder="GitHub Username"
          prefix={<UserOutlined />}
          onChange={(e) => handleUserChange(e.target.value)}
          onKeyDown={searchOnKeyPress}
        />
        <Button type="primary" size="large" loading={loading}>
          Search
        </Button>
      </div>
    </div>
  );
}
