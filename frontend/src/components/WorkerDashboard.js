// components/WorkerDashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const WorkerDashboard = () => {
  const tasks = useSelector((state) => state.tasks.filter(task => task.assignedTo === state.user.user.id));

  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Worker Dashboard
      </Typography>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default WorkerDashboard;
