import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';
import RootComponent from './components/root/RootComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RootComponent />
  // </React.StrictMode>
);

// ------------------------------------------ Arrow as Class Member (Bad Implementation) ------------------------------------------

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   // 104 Bytes (52 bytes per instance)
//   getName() {
//     return this.name;
//   }

//   setName(name) {
//     this.name = name;
//   }

//   // 288 Bytes (144 bytes per instance)
//   // getName = () => {
//   //   return this.name;
//   // }

//   // setName = (name) => {
//   //   this.name = name;
//   // }

//   // 288 Bytes (144 bytes per instance)
//   // getName = function() {
//   //   return this.name;
//   // }

//   // setName = function(name) {
//   //   this.name = name;
//   // }
// }

// var p1 = new Person('Manish');
// console.log(p1.getName());
// p1.setName('Ramakant');
// console.log(p1.getName());

// var p2 = new Person('Subodh');
// console.log(p2.getName());
// p2.setName('Abhijeet');
// console.log(p2.getName());

// console.log(p1);
// console.log(p2);


// --------------------------------------------- Functions
// // Declaration Syntax
// function add1(a, b) {
//   return a + b;
// }

// // Expression Syntax
// var add2 = function (a, b) {
//   return a + b;
// }

// // Arrow Syntax - Multiline Arrow
// var add3 = (a, b) => {
//   return a + b;
// }

// // Arrow Syntax - Single Line Arrow
// var add4 = (a, b) => a + b;

// console.log(add1(10, 20));
// console.log(add2(10, 20));
// console.log(add3(10, 20));
// console.log(add4(10, 20));

// ----------------------------

// var i = 10;
// console.log("i = ", i);
// console.log("type of i = ", typeof i);

// var f = function () { console.log("Hello World"); }
// console.log("f = ", f);
// console.log("type of f = ", typeof f);

// var s = "Hello";
// console.log(s);
// console.log(typeof s);

// var s1 = String("Hello");
// console.log(s1);
// console.log(typeof s1);

// var s2 = new String("Hello");
// console.log(s2);
// console.log(typeof s2);

// var f = new Function('console.log("Hello World");');
// console.log(f);
// console.log(typeof f);