import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase/Firebase";
import {
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const App = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [college, setCollege] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const studentCollectionRef = collection(db, "students");

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line
  }, []);

  // get All data
  const getStudents = async () => {
    const students = await getDocs(studentCollectionRef);
    const data = students.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(students);
    setStudents(data);
  };

  // post data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudent = {
      name,
      college,
      age,
      rollNumber,
    };
    try{
      await addDoc(studentCollectionRef, newStudent);
      getStudents();
    }catch(err) {
      console.log(err);
    }
  };

  // update data
  const handleUpdate = async (student) => {
    const userDoc = doc(db, "students", student.id);
    const updateAgeObject = {
      name,
      college,
      age,
      rollNumber
    };
    try {
      await updateDoc(userDoc, updateAgeObject);
      getStudents();
    } catch (err) {
      console.log(err);
    }
  };

  // delete data
  const handleDelete = async (student) => {
    const userDoc = doc(db, "students", student.id);
    console.log(userDoc);
    try {
      await deleteDoc(userDoc);
      getStudents();
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Student data</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="college">College</label>
        <input
          type="text"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="rollNumber">Roll Number</label>
        <input
          type="number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <div>
        {students.map((student) => (
          <div
            style={{
              border: "1px solid gray",
              background: "#f9bebe",
              width: "400px",
              margin: "1rem auto",
            }}
            key={student.id}
          >
            <p>Student Name: {student.name}</p>
            <p>Student College: {student.college}</p>
            <p>Student Age: {student.age}</p>
            <p>Student RollNumber: {student.rollNumber}</p>
            <button onClick={() => handleDelete(student)} style={{marginLeft: "1rem"}}>Delete</button>
            <button
              onClick={() => handleUpdate(student)}
              style={{ background: "orange", marginLeft: "1rem" }}
            >
              Update
            </button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
