// Do Now: Find the IDs - open the Dev Tool's console
const textBox = document.querySelector("user-input");
const outputBox = document.querySelector("quiz-output");
const statusBox = document.querySelector("status");

console.log(textBox, outputBox, statusBox);


let score = 0;

const checkAnswer = () => {
  // Retrieve inputted value
  const currentAnswer = textBox.value;
  console.log(currentAnswer);
  // Match against boroughs; Add text to output and increment score
  if (currentAnswer == "Manhattan"){
    outputBox.innerHTML += "<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>"; 
    score+= 1;
  } else if (currentAnswer.innerHTML == "Brooklyn"){
    outputBox.innerHTML += "<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>";
    score+=1;
  } else if (currentAnswer =="Queens"){
    outputBox.innerHTML += "<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>";
    score+=1;
  } else if (currentAnswer=="Bronx"){
    outputBox.innerHTML+= "<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>";
    score+=1;
  } else if (currentAnswer=="Staten Island"){
    outputBox.innerHTML +="<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>";
    score+=1;
  } else {
    statusBox.innerHTML =`Sorry but ${currentAnswer} is not a borough in NYC!`
  };

  //check if score = 5! (winner)

  // Reset the textBox
  textBox.value = "";
};
textBox.addEventListener("change", checkAnswer);



// Manhattan - `<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>`
// Brooklyn - `<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>`
// Bronx - `<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>`
// Queens - `<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>`
// Staten Island - `<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>`
