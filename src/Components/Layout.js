import React from 'react'
import { Link } from 'react-router-dom'
import './css/employees.css'

const Layout = (props) => {
  return (
    <div className="container">
      <h1>{props.title}</h1>
      <hr />
      {props.children}
    </div>
  )
}

export default Layout
