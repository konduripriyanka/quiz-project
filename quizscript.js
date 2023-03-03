const quizData=[
{
    question:'which of the following is markup language-------?',
     a:'java',
     b:'python',
     c:'HTML',
     d:'css',
     correct:'c'
},
{
    question:'which is mutable object in java-----?',
     a:'string buffer',
     b:'integer',
     c:'float',
     d:'stribg',
     correct:'a'
},
{
    question:'what is the full form of "HTML"----------?',
     a:'http text markup language',
     b:'hyper text markup language',
     c:'http protocol',
     d:'hyper type markup language',
     correct:'b'
},
{
    question:'which method is used for gettinh all the data in controller-------',
     a:'@postmapping',
     b:'@putmapping',
     c:'@delete',
     d:'@getmapping',
     correct:'d'
},
];


const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')

const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')

const submitbtn=document.getElementById('submit')

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData=quizData[currentQuiz]

    questionEl.innerText=currentQuizData.question

    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getselected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.Checked){
            answer=answerEl.id
        }
    })
    return answer
}
submitbtn.addEventListener('click',()=>{
    const answer=getselected()
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz<quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=`
            <h2>you answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})