import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../redux/actions/userActions';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dob: user?.dob || '',
    gender: user?.gender || '',
    role: user?.role || '',
  });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      dob: user?.dob || '',
      gender: user?.gender || '',
      role: user?.role || '',
    });
  }, [user]);

  useEffect(() => {
    // Form validation logic
    const isValid = Object.values(formData).every((field) => field.trim() !== '');
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setError('All fields are required.');
      return;
    }

    dispatch(updateProfile(formData));
    localStorage.setItem('user', JSON.stringify(formData));
    setShowModal(false);
    setError('');
    alert('Profile updated successfully!');
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h1 className="text-primary font-weight-bold">Welcome {user?.name}!</h1>
        <div className="card shadow-lg mt-4">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="text-dark font-weight-semibold">User Details</h3>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => setShowModal(true)}
              >
                <i className="bi bi-pencil-square"></i> Edit Profile
              </button>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <p><strong className="text-muted">Name:</strong> {user?.name}</p>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <p><strong className="text-muted">Email:</strong> {user?.email}</p>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <p><strong className="text-muted">Phone No:</strong> {user?.phone}</p>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <p><strong className="text-muted">Date of Birth:</strong> {user?.dob}</p>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <p><strong className="text-muted">Gender:</strong> {user?.gender}</p>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <p><strong className="text-muted">Role:</strong> {user?.role}</p>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="modal fade show d-block" style={{ zIndex: 1050, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-lg" style={{ maxWidth: '650px', margin: 'auto' }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h3>Edit Profile</h3>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  {error && <p className="text-danger">{error}</p>}
                  <form onSubmit={handleSave}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone No <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="dob" className="form-label">
                        Date of Birth <span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        className="form-control"
                        value={formData.dob}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="gender" className="form-label">
                        Gender <span className="text-danger">*</span>
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="form-control"
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="role" className="form-label">
                        Role <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        className="form-control"
                        value={formData.role}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!isFormValid}
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
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

export default Dashboard;
