import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Employees from './Components/Employees';
import Employee from './Components/Employee';
import './App.css';
import Error from './Components/Error/Error';

function App() {
  return (
    <Router>
    <Routes>
      <Route index element={<Employees/>} />
      <Route path="/employee/:id" element={<Employee/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </Router>
  );
}

export default App;
