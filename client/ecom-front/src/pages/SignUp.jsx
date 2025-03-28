import { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { name, email, password } = formData;
  
    // Validate inputs first
    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    } else if (!email.includes('@')) {
      setError('Enter a valid email');
      return;
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    } else {
      setError('');
    }
  
    
    try {
      const response = await fetch("https://ecommerce-zof6.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.message || "User registered successfully!");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  

  const containerStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f4f4f9', // Light grey background for contrast
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
  };

  const inputContainerStyle = {
    marginBottom: '10px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const labelStyle = {
    color: '#555',
  };

  const errorStyle = {
    color: 'red',
  };

  const buttonStyle = {
    padding: '10px',
    width: '100%',
    backgroundColor: '#007bff', // Simple blue button
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        {error && <p style={errorStyle}>{error}</p>}
        <button type="submit" style={buttonStyle}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
