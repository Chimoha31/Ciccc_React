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
//--------------------------------------------
// type assertion
let id: any = 123;

// let numberID = <number>id;
let numberID = id as number;
console.log(numberID);

//------------------------------------------
// interface
interface Animal {
  name: String,
  taleNumber: number
}

let ani: Animal = {
  name: "Dog",
  taleNumber: 1
}
console.log(ani)
//----------------------------------------
// functions
function sum(num1: number, num2: number) {
  return num1 + num2;
}
console.log(sum(2, 3));

//----------------------------------------
// Generic
function printArray<T>(array: T):T {
  return array;
}
// let numberArr = <number[]>printArray([1,2,3]);
// let stringArr = <string[]>printArray(["1", "2"]);
// console.log(numberArr);
// console.log(stringArr);




  return(
  <div className="App">App</div>
  ) 
}

export default App;
