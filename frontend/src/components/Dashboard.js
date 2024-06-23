// components/Dashboard.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../actions/userActions';
import AdminPanel from './AdminPanel';
import WorkerDashboard from './WorkerDashboard';
import { CircularProgress, Container, Typography, Box } from '@mui/material';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  if (!user) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container>
      <Box sx={{ marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user.name}
        </Typography>
        <Typography variant="body1">Email: {user.email}</Typography>
        <Typography variant="body1">Role: {user.role}</Typography>
        {user.role === 'admin' ? <AdminPanel /> : <WorkerDashboard />}
      </Box>
    </Container>
  );
};

export default Dashboard;
