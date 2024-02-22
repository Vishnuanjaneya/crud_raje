import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !age || !grade) return;
    addItem({ name, age, grade });
    setName('');
    setAge('');
    setGrade('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <input
        type="text"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        placeholder="Grade"
      />
      <button type="submit" className="green-button">Add</button> {/* Add green-button class */}
    </form>
  );
};

export default AddItem;
