const quizFrom = documentSelector('.quizFrom')
const submitAnswerBtn=document.querySelectorAll("#submit-answer-btn")
const outputE1=document.querySelector("#output")
const constructorAnswer =["90","right angled"];
function calculateScore(){
    let score=0;
    let index=0;
    const formResults = new FormData(quizFrom);
    for(let value of formResults.value()){
        if(value===correctAnswer[index]){
            score=score+1;
        }
        index=index+1;
       
    }
    //console.log(score);
    outputE1.innerText="Your score is "+score;


}
submitAnswerBtn.addEvenListener("click",calculateScore);
