# Extensions
## Mild Activities

1. Continue the else if conditional statements in the same pattern as how "Manhattan" is coded. Test each one out as you code it so you know you're on the right track. Here are the special messages that should be printed out with each correct guess:

- Manhattan: `<h3>Manhattan</h3><p>Commuter Central! Only 22% of its residents own a car!</p>`
- Brooklyn: `<h3>Brooklyn</h3><p>The most populous Borough, with nearly 3 million residents!</p>`
- Bronx: `<h3>The Bronx</h3><p>Home of the Yankees and the birthplace of salsa dancing.</p>`
- Queens: `<h3>Queens</h3><p>The largest Borough, at 109 square miles.</p>`
- Staten Island: `<h3>Staten Island</h3><p>The roomiest Borough, with the fewest people per square mile.</p>`

2. For the else statement, change the innerHTML of the statusBox to be an invalid message containing the inputted guess. NOTE: Don't increment the score as this is an incorrect guess. You can use a formatted string as follows:

`Sorry, but ${currentAnswer} is not a NYC Borough.`

3. Test out the website with right and wrong guesses.

NB: When formatting strings, you are using back ticks and NOT single or double quotes - the back tick can be found to the left of the 1 key on the top left corner of the keyboard.

## Medium Activities

4. Create a new function checkScore() that changes the statusBox message if the score is equal to 5. The message should say "Congratulations, you found all five boroughs!". Then, call the checkScore() function under the comment in the checkAnswer() function as follows:

`//check if score = 5! (winner)`
`checkScore();`

5. Add a secret town to the list of valid entries. It can be a town in one of the boroughs like "Chinatown" or "West Village", it can be a town in New Jersey like "Jersey City", or it can be a made up town like "Halloween Town". When this entry is inputted, it should have its own special output like the 5 boroughs, but it should not add 1 to the score.

6. Under the score variable, create a boolean variable for your additional town, and set it to false.

- When your town is guessed, change the boolean variable to true.
- In the checkScore() function, if the score is equal to 5 and if the boolean value is true, put a special message in the statusBox, and disable it! Check out this resource to find out [how to disable an input field](https://www.w3schools.com/jsref/prop_text_disabled.asp).

## Spicy Activities

7. Currently, if you type any of the following guesses in the inputBox, you will get an invalid result: "The Bronx", "bronx", "Bronx " (notice the space after). Think about ways you can allow for these nuanced responses to be successful, and solve them with your partner. Consider the following resources:

- [String Methods](https://www.w3schools.com/js/js_string_methods.asp)
- [Compound Conditional Statements](https://www.w3schools.com/js/js_comparisons.asp)

8. Currently, this game is a bit flawed. Try typing in "Manhattan" 5 times and see what happens! With your partner, come up with a way to make sure this doesn't happen. The statusBox should have a message that tells the user they've already guessed that borough.
