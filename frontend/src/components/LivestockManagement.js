
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const LivestockManagement = () => {
  const [livestock, setLivestock] = useState([]);
  const [formData, setFormData] = useState({ name: '', type: '', birthDate: '', healthStatus: '' });
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchLivestock = async () => {
      const res = await axios.get('/api/livestock', {
        headers: { Authorization: token },
      });
      setLivestock(res.data);
    };
    fetchLivestock();
  }, [token]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/livestock', formData, {
      headers: { Authorization: token },
    });
    setLivestock([...livestock, res.data]);
    setFormData({ name: '', type: '', birthDate: '', healthStatus: '' });
  };

  return (
    <div>
      <h1>Livestock Management</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={formData.name} onChange={onChange} placeholder="Livestock Name" required />
        <input type="text" name="type" value={formData.type} onChange={onChange} placeholder="Livestock Type" required />
        <input type="date" name="birthDate" value={formData.birthDate} onChange={onChange} required />
        <input type="text" name="healthStatus" value={formData.healthStatus} onChange={onChange} placeholder="Health Status" required />
        <button type="submit">Add Livestock</button>
      </form>
      <ul>
        {livestock.map((animal) => (
          <li key={animal._id}>{animal.name} - {animal.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default LivestockManagement;
