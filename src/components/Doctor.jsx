import React, { useState } from "react";
import Card from "./Card";
import "./style.css";

const doctors = [
  { id: 1, img: "doc2.jpeg", title: "Dr. T Ravishankar", description: "MBBS, MD, DM - Shankar Endoscopy Centre, RaceCourse, Coimbatore - Ravi Clinic, ₹700 Consultation fee at clinic" },
  { id: 2, img: "doc3.jpeg", title: "Dr. Duraisamy", description: "Cardiologist with 17 years of experience overall, Kovaipudur, Coimbatore - Durai Clinic, ₹400 Consultation fee at clinic" },
  { id: 3, img: "doc4new.jpeg", title: "Dr. Suganya", description: "Gynecologist with 17 years of experience, Saibaba Colony, Coimbatore - Baba Clinic, ₹500 Consultation fee at clinic" },
  { id: 4, img: "doc5neww.jpg", title: "Dr. T. Kannan", description: "BSc - Speech & Hearing Therapist, Audiologist, Speech Therapist with 30 Years Experience Overall" },
  { id: 5, img: "doc6.jpg", title: "Dr. Prathika", description: "Gynecologist with 5 years of experience overall, Gandhipuram, Coimbatore - GP Hospital, ₹300 Consultation fee at clinic" },
  { id: 6, img: "doc7.jpg", title: "Mr. Ramkumar R", description: "Physiotherapist with 5 years of experience overall, Gandhipuram, Coimbatore, ₹300 Consultation fee at clinic" },
  { id: 7, img: "doc8.jpg", title: "Dr. Jane Elizabeth John", description: "BDS Dentist with 12 Years Experience Overall, Medical Registration Verified" },
  { id: 8, img: "doc9.jpg", title: "Rajesh", description: "Gynecologist/Obstetrician 31 years experience overall Gandhipuram, Coimbatore GP Hospital ₹300 Consultation fee at clinic" },
  { id: 9, img: "doc10.jpeg", title: "Dr. Prince Herbert", description: "Dentist with 46 years of experience overall" },
  { id: 10, img: "doc10new.jpg", title: "Dr. Danush Kumar R", description: "Dentist with 7 years of experience overall, Saibaba Colony, Coimbatore - Meso Dental" },
  {id: 11, img: "doc11new.jpg", title: "Dr.Aakash", description: "Cancer Specialist with 4 years of experience "},
];

const Doctor = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleBookAppointment = (title) => {
    alert(`Appointment booking for ${title}`);
    // Implement actual booking logic here
  };

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleConfirmAppointment = () => {
    if (!appointmentDate || !appointmentTime) {
      alert("Please select both a date and time for your appointment.");
      return;
    }
    alert(`Appointment confirmed for ${selectedDoctor.title} on ${appointmentDate} at ${appointmentTime}`);
    // Implement actual booking logic here

    // Close modal after confirming
    setSelectedDoctor(null);
  };

  const handleCancelAppointment = () => {
    setSelectedDoctor(null); // Close modal without confirming
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const title = doctor.title.toLowerCase();
    const description = doctor.description.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    return title.includes(searchTermLower) || description.includes(searchTermLower);
  });

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "30%",
          padding: "10px",
          fontSize: "18px",
          marginBottom: "30px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      />
      <main className="doctor-container">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} img={doctor.img} title={doctor.title} description={doctor.description}>
            <div className="button-container">
              <button
                onClick={() => setSelectedDoctor(doctor)}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  padding: "10px 20px",
                  transition: "background-color 0.3s ease, transform 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "darkgreen";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "green";
                  e.target.style.transform = "scale(1)";
                }}
              >
                Book Appointment
              </button>
            </div>
          </Card>
        ))}
      </main>

      {selectedDoctor && (
        <div className="modal">
          <div className="modal-content">
            <h2>Book Appointment with {selectedDoctor.title}</h2>
            <label htmlFor="date">Select Date:</label>
            <input
              type="date"
              id="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
            />
            <label htmlFor="time">Select Time:</label>
            <input
              type="time"
              id="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
            />
            <button onClick={handleConfirmAppointment}>Confirm</button>
            <button onClick={handleCancelAppointment}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctor;
