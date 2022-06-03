import React from "react";
import "./App.css";

function App() {
  const studentName: String = "Daniel";
  console.log(studentName);

  const studentAge: Number = 30;
  console.log(studentAge);

  const isHappy: boolean = true;
  console.log(isHappy);

  //---------------------------------------
  // let student: any = {
  //   name: "Chiho"
  // }
  // student = 4
  //---------------------------------------

  type Student = {
    name: string;
    age: number;
    college: string;
    newStudent: boolean;
  };

  let student1: Student = {
    name: "Teddy",
    age: 1,
    college: "Grooming",
    newStudent: true,
  };
  console.log(student1);
//-----------------------------------------------------------
// array
let array: number[] = [1, 2, 3, 4];
console.log(array);
let strArray: string[] = ["1","2","3","4"];
console.log(strArray);
let tuplesArray: [string, number, boolean] = ["Atinder", 29, true];
console.log(tuplesArray);

//-----------------------------------------------------------
// union
let age: number | string = 24;
console.log(age);

//-----------------------------------------------------------
// optional parameter
type College = {
  name: string,
  capacity: number,
  ceo?: string,
  address?: string | undefined,
}

let CICCC: College = {
  name: "cornerstone",
  capacity: 100,
  ceo: "Johnny",
}
console.log(CICCC);






  return <div className="App">App</div>;
}

export default App;
