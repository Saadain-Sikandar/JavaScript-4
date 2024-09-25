// Q1. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser.

// var qualif = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","Phd"];

// document.write(`
    
//     <h1>Qualifications:<\h1>

//     `)

//     for(var i = 0;i<qualif.length;i++){

//         document.write(`${qualif[i]} <br>`)

//     }

// -----------------------------------------------------------------------------------------

// Q2.Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var student = ["john","Micheal","Tony"];
// var marks = [230,320,480];
// var total_marks = 500;

// for(var i = 0 ; i<student.length;i++){

//     var perc = (marks[i]/total_marks)*100;

//     document.write(`
        
//       <h2>Score of ${student[i]} is ${marks[i]}.Percentage is ${perc}%.  <\h2>   
        
//         `)
// }


// -----------------------------------------------------------------------------------------------

// Q3.1. Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element.

// var arr = ["Hello"];
// arr.push("World");

// alert(arr[arr.length-1]);


// --------------------------------------------------------------------------------------


// Q4.var sizes =["S","M","Xl","XXL","XXXL"].
// Remove the first element of an array.

// var sizes =["S","M","Xl","XXL","XXXL"];
// sizes.shift();
// console.log(sizes);

// -----------------------------------------------------------------------------------------

// Q5.var sizes =["S","M","Xl","XXL","XXXL"].
// Add three number elements to the beginning of an array.

// var sizes =["S","M","Xl","XXL","XXXL"];
// sizes.unshift(10,20,30);

// console.log(sizes);


// ------------------------------------------------------------------------------------

// Q6.var sizes =["S","M","Xl","XXL","XXXL"].
// insert "L" into the array between "M" and "XL"


// var sizes =["S","M","Xl","XXL","XXXL"];

// sizes.splice(2,0,"L");      // 2 is the index where L is to be added.

// console.log(sizes);

// -----------------------------------------------------------------------------------------

// Q7. var pets = ["dog","cat", "ox", "duck","frog"];
// Copy the first 3 sizes of the array and put them into a new array,

// var pets = ["dog","cat", "ox", "duck","frog"];

// var Copy = pets.slice(0,3);

// console.log(Copy);








