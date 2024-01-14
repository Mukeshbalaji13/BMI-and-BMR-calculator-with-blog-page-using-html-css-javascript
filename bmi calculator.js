//BMI function
function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var age = document.getElementById("age").value
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var bmi;


  if (weight==="" || height==="" || age==="" ) {
    document.getElementById("result").innerHTML = "Please fill all required details.";
    return;
  }

  if (document.getElementById("switch-label").innerHTML === "Use Standard Units") {
    bmi = calculateMetricBMI(weight, height);
  } else {
    bmi = calculateStandardBMI(weight, height);
  }

  var status = getHealthStatus(bmi);
  document.getElementById("result").innerHTML = "Your BMI: " + bmi.toFixed(2);
  document.getElementById("health-status").innerHTML = "You are " + status

  var color = bmicolorchange(bmi, gender);
  document.getElementById("result").style.backgroundColor = color;
  document.getElementById("health-status").style.backgroundColor = color;

  var pictureshow = picture(bmi, gender);
  document.getElementById("image-show").src = pictureshow;

  showloader();
}

//BMI metric units calculation formula
function calculateMetricBMI(weight, height) {
  return weight / ((height / 100) ** 2); // Calculate BMI using weight in kg and height in cm
}

//BMI standard units calculation formula
function calculateStandardBMI(weight, height) {
  return (weight / (height ** 2)) * 703; // Calculate BMI using weight in lbs and height in inches
}

//BMI health status function
function getHealthStatus(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Healthy";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      return "Fat";
    } else if (bmi >= 30.0 && bmi <=34.9) {
      return "Obese";
    } else {
      return "Extremely Obese";
    }
  }

//BMI picture changing function
function picture(bmi, gender){
  if (gender === "male"){
    if (bmi < 18.5) {
      return "bmi male underweight.png";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "bmi male healthy.png";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      return "bmi male fat.png";
    } else if (bmi >= 30.0 && bmi < 34.9) {
      return "bmi male obese.png";
    } else {
      return "bmi male extremely obese.png";
    }
  }
  else {
    if (bmi < 18.5) {
      return "bmi female underweight.png";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "bmi female healthy.png";
    } else if (bmi >=25.0 && bmi <= 29.9) {
      return "bmi female fat.png";
    } else if (bmi >= 30.0 && bmi < 34.9) {
      return "bmi female obese.png";
    } else {
      return "bmi female extremely obese.png";
    }
  }
}

//BMI result and status font color changing function 
function bmicolorchange(bmi, gender){
  if(gender==="male"){
    if (bmi < 18.5) {
      return "#60ccf3";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "#63bc46";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      return "#dacd2c";
    } else if (bmi >= 30.0 && bmi < 34.9) {
      return "#f78f2c";
    } else {
      return "#ee3928";
    }
  }
  else {
    if (bmi < 18.5) {
      return "#8ab0d5";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "#81c49b";
    } else if (bmi >=25.0 && bmi <= 29.9) {
      return "#ffdc08";
    } else if (bmi >= 30.0 && bmi < 34.9) {
      return "#e79438";
    } else {
      return "#d3222c";
    }
  }
}




//BMR function
function calculateBMR() {
  var weight = (document.getElementById("weight").value);
  var height = (document.getElementById("height").value);
  var age = (document.getElementById("age").value);
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var bmr;

  if (weight==="" || height==="" || age==="") {
    document.getElementById("result").innerHTML = "Please fill all required details.";
    return;
  }

  if (document.getElementById("switch-label").innerHTML === "Use Standard Units") {
    bmr = calculateMetricBMR(weight, height, age, gender);
  } else {
    bmr = calculateStandardBMR(weight, height, age, gender);
  }

  document.getElementById("result").innerHTML = "Your BMR: " + bmr.toFixed(2) + " calories";
  document.getElementById("health-status").innerHTML = "You are consuming " + bmr.toFixed(2) + " calories/day"
  document.getElementById("image-show").src = "favpng_calorie-clip-art.png"

  var color = bmrcolorchange(gender);
  document.getElementById("result").style.backgroundColor = color;
  document.getElementById("health-status").style.backgroundColor = color;

  showloader();
}

//BMR metric units calculation formula
function calculateMetricBMR(weight, height, age, gender) {
  if (gender === "male") {
    return 66.5 + (13.75 * weight) + (5 * height) - (6.75 * age); // Mifflin-St Jeor formula for males
  } else {
    return 655 + (9.56 * weight) + (1.85 * height) - (4.68 * age); // Mifflin-St Jeor formula for females
  }
}

//BMR standard units calculation formula
function calculateStandardBMR(weight, height, age, gender) {
  if (gender === "male") {
    return 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age); // Harris-Benedict formula for males
  } else {
    return 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age); // Harris-Benedict formula for females
  }
  
}

//BMR result and status font color changing function
function bmrcolorchange(gender){
  if(gender==="male"){
    return "#01A6EA"
  }
  else{
    return "#a649a4"
  }
}

//switching between metric and standard units function
function switchUnits() {
  var weightUnit = document.getElementById("weight-unit");
  var heightUnit = document.getElementById("height-unit");
  var switchLabelName = document.getElementById("switch-label");

  if (switchLabelName.innerHTML === "Use Metric Units") {
    weightUnit.innerHTML = " (kg)";
    heightUnit.innerHTML = " (cm)";
    switchLabelName.innerHTML = "Use Standard Units";
  } else {
    weightUnit.innerHTML = " (lbs)";
    heightUnit.innerHTML = " (inches)";
    switchLabelName.innerHTML = "Use Metric Units";
  }
}

//droplist links list function
const droplistbtn = document.querySelector('.menu-toggle');
const droplist = document.querySelector('.menu');

droplistbtn.addEventListener('click', function() {
  droplist.classList.toggle('open');
});

droplistbtn.addEventListener('click', () =>{
  droplistbtn.classList.toggle('clicked')
})



function showloader(){
  const loader=document.getElementById('loader');
  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
}
