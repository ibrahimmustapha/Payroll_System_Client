import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/employees.css';

const BASE_URL = 'http://localhost:8080/api/v1/payroll/all-employees';

const EmployeesData = () => {
  const navigate = useNavigate()
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    axios.get(BASE_URL, {
        headers: { 
          'Content-Type': 'application/json', 
        }}).then((response) => {
        setEmployees(response.data)
        console.log(response.data)
      })
  }, [])

  return (
    <div className="container">
      <h3>Payroll</h3>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Photo</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Age</th>
              <th>DOB</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Gender</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employeeId}>
                <td onClick={() => navigate(`/employee/${employee.employeeId}`)}>
                  <img 
                    className="employeeImage"
                    src={'data:image/png;base64,' + employee.employeeImage.data}
                    alt={employee.employeeImage.name}
                  />
                </td>
                <td>{employee.employeeFirstName}</td>
                <td>{employee.employeeLastName}</td>
                <td>{employee.employeeEmail}</td>
                <td>{employee.employeeAge}</td>
                <td>{employee.employeeDateOfBirth}</td>
                <td>{employee.employeeAddress}</td>
                <td>{employee.employeeContact}</td>
                <td>{employee.employeeGender}</td>
                <td>{employee.salary.netIncome}</td>
                <td>
                  <a href="#hello" className="btn btn-primary">
                    Update
                  </a>
                  <a href="#hello" className="btn btn-danger">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeesData;