// import React, { useState } from 'react';
// import './UserRegister.css';

// const UserRegister = () => {
//     const [formData, setFormData] = useState({
//         name: '',
        
//         password: '',
        
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleRegister = (e) => {
//         e.preventDefault();
//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match!");
//             return;
//         }
//         console.log("Registration Data: ", formData);
//         // Add your registration logic here
//     };

//     return (
//         <div className="register-container">
//             <div className="register-box">
//                 <h2>User Registration</h2>
//                 <form onSubmit={handleRegister}>
//                     <div className="form-group">
//                         <label htmlFor="name">Full Name</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             placeholder="Enter your full name"
//                             required
//                         />
//                     </div>
//                     {/* <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Enter your email"
//                             required
//                         />
//                     </div> */}
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             placeholder="Enter your password"
//                             required
//                         />
//                     </div>
//                     {/* <div className="form-group">
//                         <label htmlFor="confirmPassword">Confirm Password</label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             name="confirmPassword"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                             placeholder="Confirm your password"
//                             required
//                         />
//                     </div> */}
//                     <button type="submit" className="register-btn">Register</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UserRegister;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserRegister.css";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    userName: "", // Updated to use "userName"
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    console.log("Registration Payload:", formData);

    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User registered successfully");
        navigate("/users/login");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>User Registration</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              id="userName"
              name="userName" // Updated to "userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Enter your user name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="register-btn">
            Register
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default UserRegister;



