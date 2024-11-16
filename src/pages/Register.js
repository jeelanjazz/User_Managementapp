import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: '#2c3e50',
      }}
    >
      <div
        className="card shadow-lg border-0 text-white"
        style={{
          width: '100%',
          maxWidth: '500px',
          borderRadius: '20px',
          backgroundColor: 'rgba(1, 0, 0, 0.6)',
        }}
      >
        <div className="card-header text-center">
          <h2 className="fw-bold">Registration Closed</h2>
        </div>
        <div className="card-body p-4">
          <p className="text-center fw-bold mb-4">
            Registration is currently not available.
          </p>
          <p className="text-center">
            Please use the following credentials to log in:
          </p>
          <div
            className="text-center p-3 my-4 rounded"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color: '#000',
              fontWeight: 'bold',
            }}
          >
            <strong>Username:</strong> admin / user
            <br />
            <strong>Password:</strong> admin123 / user123
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/login')}
              style={{
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6f42c1, #007bff)',
                border: 'none',
              }}
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
