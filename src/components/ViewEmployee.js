// ViewEmployees.js
import React, { useEffect, useState } from "react";
import "./../styles/ViewEmployee.css"; // Import the styles
import Spinner from "./Spinner";
import NavBar from "./NavBar";
const ViewEmployees = () => {
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
  }, []);

  return (
    <>
      {" "}
      <NavBar />
      <div className="container">
        <h2>View Employees</h2>
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
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ViewEmployees;
