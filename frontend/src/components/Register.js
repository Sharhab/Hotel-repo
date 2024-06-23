// components/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../layouts/userActions';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'worker' });
  const dispatch = useDispatch();

  const { name, email, password, role } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, role));
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} required />
      <input type="email" name="email" value={email} onChange={onChange} required />
      <input type="password" name="password" value={password} onChange={onChange} required />
      <select name="role" value={role} onChange={onChange}>
        <option value="worker">Worker</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

