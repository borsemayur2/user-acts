import React, { useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import { AppHeader } from "./components/StyledComponents";
import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/members"
    : "db.json";

function App() {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setLoader(true);
    axios(`${BASE_URL}`)
      .then((res) => {
        setUsers(res.data.members);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoader(false);
      });
  };

  if (loader) return <h2>loading...</h2>;
  if (!users.length) return <h2>No users found</h2>;

  return (
    <div className="App">
      <AppHeader>Users</AppHeader>
      <UserList users={users} />
    </div>
  );
}

export default App;
