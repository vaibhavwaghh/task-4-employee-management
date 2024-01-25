// DeleteEmployee.js
import React, { useEffect, useState } from "react";
import "./../styles/DeleteEmployee.css"; // Import the styles
import Spinner from "./Spinner";
import NavBar from "./NavBar";
const DeleteEmployee = () => {
  const [employees, setEmployees] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:9005/api/employees"); // Update the URL to your server's endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setIsLoading(false);
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    // Fetch data when the component mounts
    fetchData();
  }, [setEmployees]);

  async function handleDelete(id) {
    alert("Are you sure you want to delete this element");
    try {
      // setEmployees("");
      setIsLoading(true);
      const res = await fetch(`http://localhost:9005/deleteEmployee/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      setEmployees(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  return (
    <>
      <NavBar />

      <div className="container">
        <h1>Delete Employees</h1>
        {isLoading ? (
          <Spinner />
        ) : employees.length === 0 ? (
          <h2>Employees not found</h2>
        ) : (
          <table className="employee-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDelete(employee.id)}
                      className="delete-button"
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default DeleteEmployee;
