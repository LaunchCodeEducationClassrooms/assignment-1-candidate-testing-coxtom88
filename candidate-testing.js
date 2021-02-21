const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ' ';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ' ';
let correctAnswer = 0;
let candidateAnswer = ' ';
let questions = ['1. How many Presidents have been elected into office from the years 2000 - 2020? ', '2. How many of them are Democrats? ', '3. How many of them are Republicans? ', '4. Who wrote the Emancipation Proclamation? ', '5. True or False - Ronald Reagan was an actor? '];
let correctAnswers = ['4', '2', '2', 'ABRAHAM LINCOLN', 'TRUE'];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('Please type your name ');
  console.log();
  console.log('Candidate Name: ' + candidateName);
  console.log();
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++) {
   candidateAnswer = input.question(questions[i]);
   console.log("Your Answer: " + candidateAnswer);
   console.log("Correct Answer: " + correctAnswers[i]);
   console.log();
   candidateAnswers.push(candidateAnswer);   
   
   console.log();
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 for (i = 0; i < candidateAnswers.length; i++) {
   if (candidateAnswers[i] === correctAnswers[i]) {
   correctAnswer += 1;
   } else if (candidateAnswers[i].toUpperCase() === correctAnswers[i]) {
     correctAnswer += 1;
   } 
   }  
 
    console.log();
  let grade = (correctAnswer / questions.length) * 100;
  
  console.log(">>> Overall Grade: " + grade + " (" + correctAnswer + " of " + questions.length + " responses correct) <<<" )
  if (grade >= 80) {
  console.log(">>> Status: PASSED <<<");
  } else { 
  console.log(">>> Status: FAILED <<<");
  }
 
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
 
  
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};