import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaList, FaSignOutAlt } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gradient shadow-sm fixed-top" style={{ background: '#2c3e50' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-3 d-flex align-items-center" to="/dashboard">
          <FaHome size={32} className="me-2 mb-1" />
          <span>UserConnect</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link text-white fs-5 pe-4 position-relative"
                to="/dashboard"
                style={{ transition: 'color 0.3s ease' }}
                activeClassName="active"
              >
                <CgProfile size={25} className="me-2 mb-1" />
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-white fs-5 pe-4 position-relative"
                to="/todolist"
                style={{ transition: 'color 0.3s ease' }}
                activeClassName="active"
              >
                <FaList size={20} className="me-2 mb-1" />
                Todos
              </Link>
            </li>

            <li className="nav-item">
              <button className="btn btn-danger fs-5 px-4 py-2 rounded-pill" onClick={handleLogout}>
                <FaSignOutAlt size={20} className="me-2 mb-1" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
