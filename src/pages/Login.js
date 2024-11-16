import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/actions/userActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const hardcodedUsers = [
  {
    id: 1,
    name: 'admin',
    password: 'admin123',
    email: 'admin@example.com',
    phone: '7904641727',
    dob: '1999-10-14',
    gender: 'Male',
    role: 'developer',
    token: 'mockToken123',
  },
  {
    id: 2,
    name: 'user',
    password: 'user123',
    email: 'user@example.com',
    phone: '7667369360',
    dob: '2005-10-01',
    gender: 'Female',
    role: 'Tester',
    token: 'mockToken456',
  },
];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = hardcodedUsers.find(
      (u) => u.name === username && u.password === password
    );

    if (user) {
      dispatch(loginUser(user));
      localStorage.setItem('user', JSON.stringify(user));
      setError(null);
      navigate('/dashboard');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: '#2c3e50',
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: '100%',
          maxWidth: '400px',
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        <div
          className="card-header text-center text-white"
          style={{
            background: 'linear-gradient(135deg, #9b59b6, #6dd5ed)',
          }}
        >
          <h2 className="fw-bold">Welcome Back</h2>
          <p className="mb-0">Please log in to your account</p>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderRadius: '10px' }}
              />
            </div>
            <button
              className="btn btn-primary btn-lg w-100"
              type="submit"
              style={{
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #3498db, #2ecc71)',
                border: 'none',
              }}
            >
              Login
            </button>
          </form>
          {error && (
            <p className="text-danger mt-3 text-center fw-bold">{error}</p>
          )}
        </div>
        <div className="card-footer text-center" style={{ marginTop: '-10px' }}>
          <p className="mb-0">
            New User?{' '}
            <button
              className="btn btn-link text-primary fw-bold p-0 mb-1"
              style={{
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
              onClick={() => navigate('/register')}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
