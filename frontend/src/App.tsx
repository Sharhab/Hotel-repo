import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CropManagement from './components/CropManagement';
import LivestockManagement from './components/LivestockManagement';
import { loadUser } from './actions/userActions';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.token);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/crop-management" element={<ProtectedRoute role="admin"><CropManagement /></ProtectedRoute>} />
            <Route path="/livestock-management" element={<ProtectedRoute role="admin"><LivestockManagement /></ProtectedRoute>} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
