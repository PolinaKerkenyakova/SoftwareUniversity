import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const getUserHandler = (name, age) => {
    const user = {
      name,
      age,
      id: Math.random().toString()
    };

    setUsersList(prevState => [...prevState, user])
  }

  return (
    <div>
      <AddUser onAddUser={getUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
