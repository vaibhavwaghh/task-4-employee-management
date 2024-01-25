import React, { useState } from "react";
import "./../styles/AddEmployee.css";
import NavBar from "./NavBar";

const initialState = {
  id: "",
  name: "",
  salary: "",
};

const AddEmployee = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateFormData = () => {
    // Validation for ID: Must be a 2-digit number
    const idRegex = /^\d{2}$/;
    if (!idRegex.test(formData.id)) {
      alert("Invalid ID. Please enter a 2-digit number.");
      setFormData(initialState);
      return false;
    }

    // Validation for Name: Only letters, no numbers or symbols
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(formData.name)) {
      alert("Invalid name. Please enter only letters.");
      setFormData(initialState);
      return false;
    }

    // Validation for Salary: Only numbers
    const salaryRegex = /^\d+$/;
    if (!salaryRegex.test(formData.salary)) {
      alert("Invalid salary. Please enter only numbers.");
      setFormData(initialState);
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    // Validate the form data before sending to the server
    if (!validateFormData()) {
      return;
    }

    // Data to be sent to the server
    const data = {
      id: formData.id,
      name: formData.name,
      salary: formData.salary,
    };

    console.log(data);

    // Sending data to the server using fetch
    fetch("http://localhost:9005/addEmployee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        alert("DATA SUCCESSFULLY UPDATED IN DATABASE");
        setFormData(initialState);

        // Handle success, e.g., show a success message to the user
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <h2>Add Employee</h2>
        <form>
          <label className="form-label">ID:</label>
          <input
            type="number"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="form-input"
            required
          />
          <br />

          <label className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          <br />

          <label className="form-label">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
            className="form-input"
          />
          <br />

          <button type="button" onClick={handleSubmit} className="form-button">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
