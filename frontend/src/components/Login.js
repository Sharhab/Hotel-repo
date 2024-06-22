// components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/userActions';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" value={email} onChange={onChange} required />
      <input type="password" name="password" value={password} onChange={onChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

