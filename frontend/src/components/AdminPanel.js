// components/AdminPanel.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask, addTask } from '../actions/taskActions';
import { Box, Button, TextField, Typography, List, ListItem, ListItemText } from '@mui/material';

const AdminPanel = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  const handleUpdateTask = (taskId, updatedTask) => {
    dispatch(updateTask(taskId, updatedTask));
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Admin Panel
      </Typography>
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add Task
      </Button>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText
              primary={task.name}
              secondary={
                <TextField
                  defaultValue={task.name}
                  onBlur={(e) => handleUpdateTask(task.id, e.target.value)}
                  fullWidth
                />
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminPanel;
