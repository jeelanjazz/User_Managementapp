import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import TodoList from './pages/Todolist';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import './App.css';

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/todolist" element={isAuthenticated ? <TodoList /> : <Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
