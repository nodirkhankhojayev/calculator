"u strict"
// //  1-task  a) homework
// let number = 4;
// function oddEven(number){
//     if(number % 2 == 0){
//         console.log("juft");
//     } else console.log("toq");
// }
// oddEven(number);

// // 1-task b) homework
// let nom = "5";
// function identifyString(nom){
//   if(nom === "5"){
//     console.log("string");
//   } else console.log("this is not string");
// }
// identifyString(nom);


// //  1-task c)  homework
// let year = 3;
  
// numOfMonth = year * 12;
// console.log(numOfMonth);


// let operator = document.querySelectorAll(".operator");

// operator.addEventListener("click",()=>{
//           console.log(operator.textcontent);
// });

let display = document.querySelector(".display");
let button = document.querySelectorAll("button");
let operator = document.querySelectorAll(".operator");

button.forEach(button => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
});






document.addEventListener("DOMContentLoaded", function() {
  
  let result = '';

  button.forEach(button => {
      button.addEventListener('click', function() {
          const value = button.dataset.value;
          
          if (value === 'AC') {
              result = '';
          } else if (value === 'DEL') {
              result = result.slice(0, -1);
          } else if (value === '=') {
              try {
                  result = eval(result);
              } catch (error) {
                  result = 'Error';
              }
          } else {
              result += value;
          }

          display.value = result;
      });
  });
});