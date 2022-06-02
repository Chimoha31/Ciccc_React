import React, { useEffect, useState } from "react";
import { db } from "./firebase/Firebase";
import { getDocs, collection } from "firebase/firestore";

const App = () => {
  const [students, setStudents] = useState([]);
  const studentCollectionRef = collection(db, "students");

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line 
  }, []);

  const getStudents = async () => {
    const students = await getDocs(studentCollectionRef);
    const data = students.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(students);
    setStudents(data);
  };

  return (
    <div>
      <h1>Student data</h1>
      {students.map((student) => (
        <div style={{ border: "1px solid gray", background: "#f9bebe", width:"400px", margin:"1rem auto" }} key={student.id}>
          <p>Student Name: {student.name}</p>
          <p>Student College: {student.college}</p>
          <p>Student Age: {student.age}</p>
          {/* <p>Student RollNumber: {student.RollNumber}</p> */}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default App;
