import React, { useState } from 'react';

const EditItem = ({ student, updateItem }) => {
  const [name, setName] = useState(student.name);
  const [age, setAge] = useState(student.age);
  const [grade, setGrade] = useState(student.grade);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !age || !grade) return;
    updateItem(student.id, { name, age, grade });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditItem;
