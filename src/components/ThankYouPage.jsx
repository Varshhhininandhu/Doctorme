import React from 'react';
import './ThankYouPage.css'; // Import custom styles

// Import specific icons from the react-icons library
import { FaCalendarAlt, FaClock, FaCheckCircle, FaRegLaughBeam, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const ThankYou = ({ doctorName, appointmentDate, appointmentTime, onBackToHome }) => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <div className="thank-you-header">
          <h1>
            <span className="icon-container">
              <FaRegLaughBeam className="thank-you-icon" />
            </span>
            Thank You!
          </h1>
          <p>
            Your appointment with <strong>{doctorName}</strong> has been successfully booked. We’re excited to see you on <strong>{appointmentDate}</strong> at <strong>{appointmentTime}</strong>!
          </p>
        </div>

        {/* Appointment Details Section */}
        <div className="appointment-details">
          <div className="appointment-info">
            <p>
              <FaCalendarAlt className="icon" /> <strong>Date:</strong> {appointmentDate}
            </p>
            <p>
              <FaClock className="icon" /> <strong>Time:</strong> {appointmentTime}
            </p>
          </div>
          <div className="appointment-image">
            <img src="thnks3.jpg" alt="Doctor" />
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="additional-info">
          <h3>🎯 Next Steps</h3>
          <ul>
            <li><FaCheckCircle className="icon" /> Review any pre-appointment instructions sent by our office.</li>
            <li><FaCheckCircle className="icon" /> Complete any necessary paperwork ahead of time.</li>
            <li><FaCheckCircle className="icon" /> Confirm your insurance details and coverage.</li>
            <li><FaCheckCircle className="icon" /> Set a reminder for your appointment date and time.</li>
          </ul>
        </div>

        {/* Tips Section */}
        <div className="tips">
          <h3>📝 Tips for a Smooth Visit</h3>
          <p>
            Arrive at least 10 minutes early. This allows you time to check in and relax before your appointment. Bring any relevant medical records or test results to help your doctor make informed decisions.
          </p>
          <p>
            If you need to reschedule, please contact us as soon as possible to find a more convenient time.
          </p>
        </div>

        {/* Location and Contact Information */}
        <div className="location-contact">
          <h3>📍 Location & Contact</h3>
          <div className="location-info">
            <p><FaMapMarkerAlt className="icon" /> <strong>Clinic Address:</strong> 456 Wellness Ave, Health City, HC 78910</p>
            <p><FaPhoneAlt className="icon" /> <strong>Phone:</strong> (987) 654-3210</p>
            <p><FaEnvelope className="icon" /> <strong>Email:</strong> support@clinicname.com</p>
          </div>
        </div>

        {/* Feedback Submission Section */}
        <div className="feedback-section">
          <h3>📢 We Value Your Feedback</h3>
          <p>Help us improve by sharing your experience with us. Click the button below to provide your feedback.</p>
          <button className="feedback-btn">
            Submit Feedback
          </button>
        </div>
        {/* Back to Home Button */}
        <div className="back-to-home">
          <button onClick={onBackToHome} className="back-home-btn">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
