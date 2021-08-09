const quizDB = [
    {
        question: "Q1: What is 2*5?",
        a: "35",
        b: "45",
        c: "10",
        d: "15",
        ans: "ans3"
    },
    {
        question: "Q2: What is 5*5?",
        a: "12",
        b: "24",
        c: "45",
        d: "25",
        ans: "ans4"
    },
    {
        question: "Q3:What is 6*7?",
        a: "64",
        b: "42",
        c: "48",
        d: "54",
        ans: "ans2"
    },
    {
        question: "Q4: What is 7*5?",
        a: "35",
        b: "56",
        c: "57",
        d: "45",
        ans: "ans1"
    }
    

];



const question = document.querySelector('.questions');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const next = document.querySelector('#next');


const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;


const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
            next.classList.remove('button')
        }   
    });
    return answer; 
      
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
};

next.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();  

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `
            <h3> you scored ${score}/${quizDB.length} <h3>
            <button class="btn" onclick="location.reload()"> Start Again.. </button>
        `;

        showScore.classList.remove('scoreArea')
    }
});
