import './App.css';
import NavBar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Student from './student';
import Employee from './employee';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/employees" element={<Employee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
