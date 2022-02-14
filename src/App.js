import React, { useEffect, useState } from "react";
import "./App.scss";
import Card from "./Card";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  return (
    <div>
      <div className="card">
        {users.map((user) => (
          <Card user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
