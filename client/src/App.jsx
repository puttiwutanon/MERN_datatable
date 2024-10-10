import { useState, useEffect } from 'react';
import './App.scss';
import Table from './table';
import Navbar from './navbar';
import Add_students from './assets/add_students';

function App() {
  const [students, setStudents] = useState([]);
  const [showAddStudent, setShowAddStudent] = useState(false);

  useEffect(() => {
    // Fetch data from backend when component mounts
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:5173/getstudents');
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleAddStudent = () => {
    setShowAddStudent(!showAddStudent);
  };

  return (
    <>
      <Navbar toggleAddStudent={toggleAddStudent} />
      <Table students={students} />
      {showAddStudent && <Add_students toggleAddStudent={toggleAddStudent} />}
    </>
  );
}

export default App;
