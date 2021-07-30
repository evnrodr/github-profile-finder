import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Avatar, Card } from "antd";

export function User() {
  const { userData } = useContext(UserContext);
  return (
    <div className="container">
      <div className="searchContainer">
        <Card
          hoverable
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
          }}
          cover={<Avatar src={userData.avatar_url} size={128} shape="circle" />}
        >
          <h1>{userData.name ? userData.name : userData.login}</h1>
          <p>{userData.bio ? userData.bio : ""}</p>
        </Card>
      </div>
    </div>
  );
}
