const questions = [
    {
        question: "what is the smallest city in world?",
        options: ["san Marino", "Vatican city", "Calgary", "Monaco"],
        answer: "Vatican city"
    },
    {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Saturn", "Mars", "Venus"],
        answer: "Mars"
    },
    { 
        question:"Which is the largest ocean on Earth?",
        options:["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },  
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Elephant", "Lion", "Giraffe"],
        answer: "Lion"
    }
  ];
  let currentQuestionIndex = 0;
  let score = 0; 
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultBox = document.getElementById("result-box");
  const scoreEl = document.getElementById("score"); 
  function loadQuestion() {
    clearOptions();
    let current = questions[currentQuestionIndex];
    questionEl.textContent = current.question;
    current.options.forEach(option => {
      let li = document.createElement("li");
      li.textContent = option;
      li.addEventListener("click", () => selectOption(li, current.answer));
      optionsEl.appendChild(li);
    });
  }
  function selectOption(selectedLi, correctAnswer) {
    let allOptions = document.querySelectorAll("#options li");
    allOptions.forEach(li => {
      li.style.pointerEvents = "none"; // disable other options
      if (li.textContent === correctAnswer) {
        li.classList.add("correct");
      } else {
        li.classList.add("wrong");
      }
    });
    if (selectedLi.textContent === correctAnswer) {
      score++;
    }
  }
  function clearOptions() {
    optionsEl.innerHTML = "";
  } 
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  function showResult() {
    document.getElementById("question-box").style.display = "none";
    nextBtn.style.display = "none";
    resultBox.style.display = "block";
    scoreEl.textContent = `${score} / ${questions.length}`;
  }
  loadQuestion();