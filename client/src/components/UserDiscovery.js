// client/src/components/UserDiscovery.js
import React, { useEffect, useState } from 'react';

function UserDiscovery() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from backend
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.about}</p>
          <button>Connect</button>
        </div>
      ))}
    </div>
  );
}

export default UserDiscovery;