import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Layout from './Layout';
import './css/employees.css';
import PopupMessage from './RemovePopup';

const BASE_URL = 'http://localhost:8080/api/v1/payroll/all-employees';

const EmployeesData = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [remove, setRemove] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(BASE_URL, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setEmployees(response.data)
        console.log(response.data)
      })
  }, [])

  const deleteEmployee = async (id) => {
    await axios
      .delete(`http://localhost:8080/api/v1/payroll/delete/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(
        () => window.location.reload(true),
        setRemove('Deleted Successfully'),
      )
      .catch((error) => {
        setError(error.message)
        console.log('There was an error ' + error.message)
      })
  }

  return (
    <Layout title="Payroll Table">
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Photo</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employeeId}>
                <td
                  onClick={() => navigate(`/employee/${employee.employeeId}`)}
                >
                  <img
                    className="employeeImage"
                    src={'data:image/png;base64,' + employee.employeeImage.data}
                    alt={employee.employeeImage.name}
                  />
                </td>
                <td>{employee.employeeFirstName}</td>
                <td>{employee.employeeLastName}</td>
                <td>{employee.employeeEmail}</td>
                <td>{employee.employeeAddress}</td>
                <td>{employee.employeeGender}</td>
                <td>{employee.salary.netIncome}</td>
                <td>
                  <Link to="#hello" className="btn btn-primary">
                    Update
                  </Link>
                  <button
                    to="/"
                    className="btn btn-danger"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Delete
                  </button>
                </td>
                <PopupMessage
                  firstname={
                    employee.employeeFirstName + ' ' + employee.employeeLastName
                  }
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() => deleteEmployee(employee.employeeId)}
                  >
                    Yes
                  </button>
                </PopupMessage>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default EmployeesData
