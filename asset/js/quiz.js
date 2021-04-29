// QUIZ 1 - Funtion
function check() {
	var correct=0;
	var questionOne=document.quiz.question1.value;
	var questionTwo=document.quiz.question2.value;
	var questionThree=document.quiz.question3.value;
	var questionFour=document.quiz.question4.value;
	var questionFive=document.quiz.question5.value;
	var result=document.getElementById('result');
	var retry=document.getElementById('retry');
	var quiz=document.getElementById("quiz");
	var hide=document.getElementById("hide");
	var hideAnsQuiz1=document.getElementById("hide-ans-quiz1");
	var revealAnsQuiz1=document.getElementById("myDIV-Quiz1");
	if (questionOne=="22cm") {correct++}
	if (questionTwo=="45sqcm") {correct++}
	if (questionThree==="16sqm") {correct++}
	if (questionFour==="60mm") {correct++}
	if (questionFive==="32ksqmm") {correct++}
  quiz.style.display="none";
  hide.style.display="none";
  hideAnsQuiz1.style.display="block";
  retry.style.display="block";
  revealAnsQuiz1.style.display="block";

	if (correct<=3) {
		result.textContent=`Your result is ${correct}. You can do better, keep on trying.`
	} else {
	result.textContent=`Your result is ${correct}. Great! Keep it up!`
	}

}

// Quiz 2 Function
function checkQuiz2() {
	var correctAns=0;
	var questionOne=document.quiz2.question1.value;
	var questionTwo=document.quiz2.question2.value;
	var questionThree=document.quiz2.question3.value;
	var questionFour=document.quiz2.question4.value;
	var questionFive=document.quiz2.question5.value;
	var result=document.getElementById('result');
	var retry=document.getElementById('retry');
	var quiz=document.getElementById("quiz");
	var hide=document.getElementById("hide");
	var hideAns=document.getElementById("hide-ans-quiz2");
	var revealAnsQuiz2=document.getElementById("myDIV-Quiz2");
	if (questionOne=="4sqcm") {correctAns++}
	if (questionTwo=="33sqcm") {correctAns++}
	if (questionThree==="32sqcm") {correctAns++}
	if (questionFour==="24sqcm") {correctAns++}
	if (questionFive==="12sqcm") {correctAns++}
  quiz2.style.display="none";
  hide.style.display="none";
  hideAns.style.display="block";
  retry.style.display="block";
  revealAnsQuiz2.style.display="block";

	if (correctAns<=3) {
		result.textContent=`Your result is ${correctAns}. You can do better, keep on trying.`
	} else {
	result.textContent=`Your result is ${correctAns}. Great! Keep it up!`
	}

}

// Quiz 1 - Answer function
function myFunctionQuiz1() {
  var x = document.getElementById("myDIV-Quiz1");
  if (x.innerHTML === "ANSWERS") {
    x.innerHTML = "1. D - 2. C - 3. A - 4. C - 5. D";
  } else {
    x.innerHTML = "ANSWERS";
  }
}

// Quiz 2 - Answer function
function myFunctionQuiz2() {
  var x = document.getElementById("myDIV-Quiz2");
  if (x.innerHTML === "ANSWERS") {
    x.innerHTML = "1. C - 2. D - 3. A - 4. C - 5. B";
  } else {
    x.innerHTML = "ANSWERS";
  }
}
