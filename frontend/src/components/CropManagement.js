
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const CropManagement = () => {
  const [crops, setCrops] = useState([]);
  const [formData, setFormData] = useState({ name: '', type: '', plantingDate: '', harvestDate: '' });
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchCrops = async () => {
      const res = await axios.get('/api/crops', {
        headers: { Authorization: token },
      });
      setCrops(res.data);
    };
    fetchCrops();
  }, [token]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/crops', formData, {
      headers: { Authorization: token },
    });
    setCrops([...crops, res.data]);
    setFormData({ name: '', type: '', plantingDate: '', harvestDate: '' });
  };

  return (
    <div>
      <h1>Crop Management</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={formData.name} onChange={onChange} placeholder="Crop Name" required />
        <input type="text" name="type" value={formData.type} onChange={onChange} placeholder="Crop Type" required />
        <input type="date" name="plantingDate" value={formData.plantingDate} onChange={onChange} required />
        <input type="date" name="harvestDate" value={formData.harvestDate} onChange={onChange} required />
        <button type="submit">Add Crop</button>
      </form>
      <ul>
        {crops.map((crop) => (
          <li key={crop._id}>{crop.name} - {crop.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default CropManagement;
