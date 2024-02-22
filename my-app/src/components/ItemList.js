import React from 'react';

const ItemList = ({ students, deleteItem, editItem }) => {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          <span>{student.name}</span>
          <span>{student.age}</span>
          <span>{student.grade}</span>
          <button onClick={() => editItem(student)}>Edit</button>
          <button onClick={() => deleteItem(student.id)} className="delete-button">Delete</button> {/* Apply the delete-button class */}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
