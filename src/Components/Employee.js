import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './css/employee.css';

const BASE_URL = 'http://localhost:8080/api/v1/payroll/employee';

const EmployeeData = () => {
  const { id } = useParams()
  const [employee, setEmployee] = useState({})
  const [employeeImage, setEmployeeImage] = useState({})
  const [salary, setSalary] = useState({})

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${id}`)
      .then((response) => {
        setEmployee(response.data)
        setEmployeeImage(response.data.employeeImage)
        setSalary(response.data.salary)
        console.log(response.data)
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div className="container">
      <h1>Employee Info</h1>
      <hr />
      <div>
        <img
          src={'data:image/jpg;base64,' + employeeImage.data}
          alt={employeeImage.name}
          className="m-employeeImage"
        />
      </div>
      <p>
        <b>Fullname:</b> {employee.employeeFirstName} {employee.employeeLastName}
      </p>
      <p><b>Email:</b> {employee.employeeEmail}</p>
      <p><b>Age:</b> {employee.employeeAge}</p>
      <p><b>Address:</b> {employee.employeeAddress}</p>
      <p><b>Date Of Birth:</b> {employee.employeeDateOfBirth}</p>
      <p><b>Contact:</b> {employee.employeeContact}</p>
      <p><b>Gender:</b> {employee.employeeGender}</p>
      <p><b>hourlyRate:</b> Gh₵{salary.hourlyRate}</p>
      <p><b>salaryBonus:</b> Gh₵{salary.salaryBonus}</p>
      <p><b>tax:</b> Gh₵{salary.taxAmount}</p>
      <p><b>insurance:</b> Gh₵{salary.insuranceAmount}</p>
      <p><b>workingHoursPerDay:</b> {salary.workingHoursPerDay} hours</p>
      <p><b>netIncome:</b> Gh₵{salary.netIncome}</p>
      <p><b>grossIncome:</b> Gh₵{salary.grossIncome}</p>
      <p><b>anualNetSalary:</b> Gh₵{salary.annualNetSalary}</p>
      <p><b>anualGrossSalary:</b> Gh₵{salary.annualGrossSalary}</p>
    </div>
  )
}

export default EmployeeData;
