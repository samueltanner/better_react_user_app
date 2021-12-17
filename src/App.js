import React, { useState } from 'react';
import AddUser from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {

  const [userList, setUserList] = useState([]);

  const addUser = (username, userAge) => {
    setUserList((prevList) => [{ id: Math.random(), name: username, age: userAge }, ...prevList])
  };

  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
