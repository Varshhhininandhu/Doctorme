import React, { useState } from 'react';
import './UserDetails.css';

const UserDetails = () => {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [isPregnant, setIsPregnant] = useState(false);
  const [currentMonth, setCurrentMonth] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [illness, setIllness] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [treatment, setTreatment] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'patientName':
        setPatientName(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'dob':
        setDob(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'isPregnant':
        setIsPregnant(value === 'yes');
        break;
      case 'currentMonth':
        setCurrentMonth(value);
        break;
      case 'deliveryDate':
        setDeliveryDate(value);
        break;
      case 'illness':
        setIllness(value);
        break;
      case 'doctorName':
        setDoctorName(value);
        break;
      case 'treatment':
        setTreatment(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User Details:', {
      patientName,
      age,
      dob,
      gender,
      isPregnant,
      currentMonth,
      deliveryDate,
      illness,
      doctorName,
      treatment,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2>User Details</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Patient Name:</label>
                  <input
                    type="text"
                    name="patientName"
                    value={patientName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Age:</label>
                  <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Date of Birth:</label>
                  <input
                    type="date"
                    name="dob"
                    value={dob}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Gender:</label>
                  <select
                    name="gender"
                    value={gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                {gender === 'female' && (
                  <div>
                    <div className="form-group">
                      <label>Are you pregnant?</label>
                      <select
                        name="isPregnant"
                        value={isPregnant ? 'yes' : 'no'}
                        onChange={handleInputChange}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    {isPregnant && (
                      <div>
                        <div className="form-group">
                          <label>Current Month of Pregnancy:</label>
                          <input
                            type="number"
                            name="currentMonth"
                            value={currentMonth}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Expected Delivery Date:</label>
                          <input
                            type="date"
                            name="deliveryDate"
                            value={deliveryDate}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <div className="form-group">
                  <label>Do you have any illness?</label>
                  <select
                    name="illness"
                    value={illness}
                    onChange={handleInputChange}
                  >
                    <option value="">Select</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Hypertension">Hypertension</option>
                    <option value="Asthma">Asthma</option>
                    <option value="Heart Disease">Heart Disease</option>
<option value="Cancer">Cancer</option>
<option value="Arthritis">Arthritis</option>
<option value="Osteoporosis">Osteoporosis</option>
<option value="Chronic Obstructive Pulmonary Disease (COPD)">Chronic Obstructive Pulmonary Disease (COPD)</option>
<option value="Other">Other</option>
                  </select>
                </div>
                {illness !== '' && (
                  <div>
                    <div className="form-group">
                      <label>Doctor's Name:</label>
                      <input
                        type="text"
                        name="doctorName"
                        value={doctorName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Treatment History:</label>
                      <textarea
                        name="treatment"
                        value={treatment}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;