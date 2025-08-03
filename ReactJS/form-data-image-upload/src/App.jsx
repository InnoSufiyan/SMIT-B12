import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value, "==>> value")
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleImageChange = (e) => {
    console.log(e.target.files[0], "===>> my image to be uploaded")
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    if (image) {
      data.append('photo', image);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/jobAd', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('Job posted successfully!');
      console.log(response.data);
    } catch (error) {
      setMessage('Error posting job');
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Job Title:</label><br />
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label><br />
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Image:</label><br />
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Post Job</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
