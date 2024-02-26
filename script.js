function bmiCalculator() {
  let userWeight = document.getElementById("weight").value;
  let userHeight = document.getElementById("height").value;
  console.log(userWeight);
  console.log(userHeight);

  
  let BMI = userWeight / (userHeight ** 2);
  result.value = BMI

    let Statement=document.getElementById("bmireslt");
  Statement.innerHTML=`Your BMI is ${BMI}`;

  if(result.value<18.5){
    Statement.innerHTML=`Your BMI is ${BMI}.You are Under weight`; 
   Statement.style.color="blue";


  }
  else if(result.value>18.5 && result.value<24.9){
    Statement.innerHTML=`Your BMI is ${BMI}.Your weight is normal`; 
    Statement.style.color="green"
  }
  else if(result.value>25 && result.value<29.9){
    Statement.innerHTML=`Your BMI is ${BMI}.You are Over weight`; 
    Statement.style.color="yellow"
  }
  else{
    Statement.innerHTML=`Your BMI is ${BMI}.You are Obese`; 
    Statement.style.color="red"
  }
}

// function bmiCalculate() {
//   // Get user input for weight and height
//   let userWeight = parseFloat(document.getElementById("weight").value);
//   let userHeight = parseFloat(document.getElementById("height").value);

//   // Check if the input is valid
//   if (isNaN(userWeight) || isNaN(userHeight) || userHeight <= 0) {
//     alert("Please enter valid weight and height.");
//     return;
//   }

//   // Calculate BMI
//   let bmi = calculateBMI(userWeight, userHeight);

//   // Display BMI in the result input field
//   displayBMIResult(bmi);

//   // Display BMI statement with color based on BMI category
//   displayBMIStatement(bmi);
// }

// // Function to calculate BMI
// function calculateBMI(weight, height) {
//   return weight / (height ** 2);
// }

// // Function to display BMI result
// function displayBMIResult(bmi) {
//   let resultInput = document.getElementById("result");
//   resultInput.value = Math.round(bmi);
// }

// // Function to display BMI statement with color
// function displayBMIStatement(bmi) {
//   let statementElement = document.getElementById("bmireslt");
//   statementElement.innerHTML = `Your BMI is ${bmi}.`;

//   if (bmi < 18.5) {
//     statementElement.innerHTML += " You are Underweight";
//     statementElement.style.color = "blue";
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     statementElement.innerHTML += " Your weight is normal";
//     statementElement.style.color = "green";
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     statementElement.innerHTML += " You are Overweight";
//     statementElement.style.color = "yellow";
//   } else {
//     statementElement.innerHTML += " You are Obese";
//     statementElement.style.color = "red";
//   }
// }
