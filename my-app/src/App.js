import React, { useState } from 'react';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import ItemList from './components/ItemList';
import './styles.css'; // Import the CSS file

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const addStudent = (student) => {
    const newStudent = {
      id: Math.random().toString(),
      ...student
    };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const editStudent = (student) => {
    setEditingStudent(student);
  };

  const updateStudent = (id, data) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, ...data } : student
    );
    setStudents(updatedStudents);
    setEditingStudent(null);
  };

  return (
    <div className="container">
      <h1>Student CRUD App</h1>
      {editingStudent ? (
        <EditItem student={editingStudent} updateItem={updateStudent} />
      ) : (
        <div className="form-container"> {/* Add form-container class */}
          <AddItem addItem={addStudent} />
        </div>
      )}
      <ItemList students={students} deleteItem={deleteStudent} editItem={editStudent} />
    </div>
  );
}

export default App;
