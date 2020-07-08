import React from 'react';
import UsersList from '../components/UsersList';
import UserList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: "u1", 
      name: "Chaim", 
      image: "image1", 
      places: "3"
    }
  ];

  return <UserList items={USERS}/>;
};

export default Users;
