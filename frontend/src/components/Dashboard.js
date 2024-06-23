// components/Dashboard.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../layouts/userAction';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      {user.role === 'admin' ? (
        <div>
          <h2>Admin Panel</h2>
          <p>Here you can manage the farm resources, users, and more.</p>
          {/* Add admin-specific features and components */}
        </div>
      ) : (
        <div>
          <h2>Worker Dashboard</h2>
          <p>Here you can view and update your tasks.</p>
          {/* Add worker-specific features and components */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

