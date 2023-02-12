/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

//Log student 2
function logStudent(student) { 
    if( student.marks > 50 ) 
    {
      console.log(student)
    }
};

function PrintStudentswithMap() {
  //Write your code here , just console.log
    arr.map(logStudent);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(logStudent);
}

function addData() {
  var studentObj = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(studentObj);
  //Write your code here, just console.log
  console.log(arr);
}

function removeFailedStudent() {

  // find the index of students who have failed;
   //var failedStudents = [];
  //[2,3]
  //  for(var i = 0; i< arr.length; i++) {
  //     if(arr[i].marks < 50) {
  //       arr.splice(i,1);
  //     }
  //  }

    const passedStudents = arr.filter( function (student) {
       //condition
       return student.marks > 50;
    } )

    // var index = arr.findIndex( function (student) {
    //   return student.marks < 50
    // } )

   
  //  newArr.forEach(function (item, index) {
  //    if (item.marks < 50) {
  //      console.log("removing", index, item);
  //      newArr.splice(index, 1);
  //    }
  //  });
   
  //Write your code here, just console.log
  console.log(passedStudents);
}

function concatenateArray() {

  let arr1 = [
    { id: 5, name: "Ankit", age: "19", marks: 91 },
    { id:6, name: "Rahul", age: "29", marks: 85 },
    { id: 7, name: "Simran", age: "19", marks: 95 },
  ];

  var finalArr = [...arr,...arr1];

  //  arr.forEach(function (item) { finalArr.push(item)});
  //  arr1.forEach(function (item) {
  //    finalArr.push(item);
  //  });

  //Write your code here, just console.log

  console.log(finalArr);

}
