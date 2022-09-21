import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "max",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0CyRWxjjEdtF9sCcJqOxtI&ust=1663867052095000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCoovexpvoCFQAAAAAdAAAAABAD",
      places: 3,
    },
  ]; //dummy data
  return <UsersList items={USERS} />;
};

export default Users;
