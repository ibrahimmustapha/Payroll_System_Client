import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Employees from './Components/Employees';
import Employee from './Components/Employee';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/employees" element={<Employees/>} />
      <Route path="/employee/:id" element={<Employee/>} />
    </Routes>
    </Router>
  );
}

export default App;
