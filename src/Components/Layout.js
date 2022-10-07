import React from 'react';
import './css/employees.css';

const Layout = (props) => {
    return (
        <div className="container">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default Layout;