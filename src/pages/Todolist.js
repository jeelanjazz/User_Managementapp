import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, updateTask, filterTasks } from '../redux/actions/todoActions';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Todolist = () => {
  const { tasks, filter } = useSelector((state) => state.todos);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [editText, setEditText] = useState('');
  const [editStatus, setEditStatus] = useState('pending');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask) {
      dispatch(addTask({ id: Date.now(), text: newTask, completed: false, pending: true }));
      setNewTask('');
    }
  };

  const handleEditTask = (task) => {
    setEditTask(task);
    setEditText(task.text);
    setEditStatus(task.completed ? 'completed' : 'pending');
  };

  const handleSaveEdit = () => {
    if (editText !== '') {
      dispatch(updateTask(editTask.id, { text: editText, completed: editStatus === 'completed', pending: editStatus === 'pending' }));
      setEditTask(null);
      setEditText('');
      setEditStatus('pending');
    }
  };

  const filteredTasks = tasks.filter((task) =>
    filter === 'all'
      ? true
      : filter === 'completed'
        ? task.completed
        : task.pending
  );

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h1 className="text-center mb-4">Task Mastery</h1>

        <div className="text-center mb-4">
          <input
            type="text"
            className="form-control my-3 w-75 mx-auto rounded-pill shadow-sm"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="btn btn-success rounded-pill px-4 py-2"
            style={{ transition: 'background-color 0.3s ease' }}
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>

        <div className="text-center mb-4">
          <button
            className={`btn mx-2 px-4 py-2 rounded-pill ${filter === 'all' ? 'btn-primary' : 'btn-outline-dark'}`}
            onClick={() => dispatch(filterTasks('all'))}
            style={{ transition: 'all 0.3s ease' }}
          >
            All
          </button>
          <button
            className={`btn mx-2 px-4 py-2 rounded-pill ${filter === 'completed' ? 'btn-success' : 'btn-outline-success'}`}
            onClick={() => dispatch(filterTasks('completed'))}
            style={{ transition: 'all 0.3s ease' }}
          >
            Completed
          </button>
          <button
            className={`btn mx-2 px-4 py-2 rounded-pill ${filter === 'pending' ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={() => dispatch(filterTasks('pending'))}
            style={{ transition: 'all 0.3s ease' }}
          >
            Pending
          </button>
        </div>

        <ul className="list-group">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${task.completed || task.pending
                ? ''
                : ''
                }`}
            >
              <div className="d-flex align-items-center">
                <span className={task.completed ? 'text-decoration-line-through' : ''}>
                  {task.text}
                </span>
              </div>
              <div>

                <FaEdit
                  className="mx-2 text-info"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleEditTask(task)}
                />
                <FaTrashAlt
                  className="mx-2 text-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => dispatch(deleteTask(task.id))}
                />
              </div>
            </li>
          ))}
        </ul>

        {editTask && (
          <div className="modal show" style={{ display: 'block' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Task</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setEditTask(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <div className="mt-3">
                    <select
                      className="form-select"
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setEditTask(null)}>
                    Cancel
                  </button>
                  <button className="btn btn-primary" onClick={handleSaveEdit}>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Todolist;
