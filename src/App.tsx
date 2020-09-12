import React, { useEffect, useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import axios from "axios";

const BASE_URL = "http://localhost:8000";

function App() {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setLoader(true);
    axios(`${BASE_URL}/members`)
      .then((res) => {
        setUsers(res.data);
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
      <UserList users={users} />
    </div>
  );
}

export default App;
