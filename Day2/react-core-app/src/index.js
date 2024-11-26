import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap';
import RootComponent from './components/root/RootComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
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