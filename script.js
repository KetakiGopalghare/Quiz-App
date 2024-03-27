const ques = [{
    correctAnswer: '<script>',
    options: ['<scripting>', '<script>', '<javascript>', '<js>'],
    question: "Inside which HTML element do we put the JavaScript?"
},
{
    correctAnswer: 'document.getElementById("demo").innerHTML = "Hello World!";',
    options: ['document.getElementById("demo").innerHTML = "Hello World!";', '#demo.innerHTML = "Hello World!";', 'document.getElement("p").innerHTML = "Hello World!";', 'document.getElementByName("p").innerHTML = "Hello World!";'],
    question: "What is the correct JavaScript syntax to change the content of the HTML element below?"
},
{
    correctAnswer: 'alert("Hello World");',
    options: ['alert("Hello World");', 'alertBox("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");'],
    question: "How do you write Hello World in an alert box?"
},
{
    correctAnswer: 'if (i == 5)',
    options: ['if (i == 5)', 'if i == 5 then', 'if i = 5 then', 'if i = 5'],
    question: "How to write an IF statement in JavaScript?"
},
{
    correctAnswer: 'Math.round(7.25)  ',
    options: ['Math.round(7.25)  ', 'rnd(7.25)', 'round(7.25)', 'Math.rnd(7.25)'],
    question: "How do you round the number 7.25, to the nearest integer?"
}];


let score = 0;
let qNo = 0
let questionelm = document.getElementById('question');
let optionelm = document.getElementById('options');
let scoreelm = document.getElementById('score');
let nextlm = document.getElementById('next');

function showQuestion() {
    let { correctAnswer, options, question } = ques[qNo];
    questionelm.innerHTML = question
    let shuffledoptions = shuffleoptions(options);

    shuffledoptions.forEach((options) => {
        let btn = document.createElement('button')
        btn.textContent = options
        optionelm.appendChild(btn)
        btn.addEventListener('click', () => {
            if (correctAnswer == options) {
                score++;
            }
            else {
                score -= 0.25
            }
            scoreelm.innerText = `Score ${score}`;
            nextQuestion();
        })
    })
}

function nextQuestion(){
    qNo++;
    optionelm.innerHTML="";
    
    if(qNo<ques.length){
        showQuestion();
    }
    else{
        questionelm.innerHTML = 'Quiz Completed'
        nextlm.remove();
    }
    
}
showQuestion();

let { correctAnswer, options, question } = ques[0];
// let correctAnswer=question.correctAnswer;
// let options=question.options;
// let questionn=question.question

questionelm.innerHTML = question

nextlm.addEventListener('click',nextQuestion)
let shuffledoptions = shuffleoptions(options);
function shuffleoptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * 4);
        [options[j], options[i]] = [options[i], options[j]]
    }
    return options;
}

// shuffledoptions.forEach((options) => {
//     console.log(options);
//     let btn = document.createElement('button')
//     btn.textContent = options
//     optionelm.appendChild(btn)
//     btn.addEventListener('click', () => {
//         if (correctAnswer == options) {
//             score++;
//         }
//         else {
//             score -= 0.25
//         }
//         scoreelm.innerText = `Score ${score}`;
//         questionelm.innerHTML = 'Quiz Completed'
//         optionelm.remove();
//     })
// })