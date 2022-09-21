import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "max",
      image: "https://images3.alphacoders.com/823/thumb-1920-82317.jpg",
      places: 3,
    },
  ]; //dummy data
  return <UsersList items={USERS} />;
};

export default Users;
