const submit = document.getElementById("submit");
const cardFront = document.querySelector(".start-state-card");
const cardBack = document.querySelector(".submit-state-card");
const body = document.body
const ratings = document.querySelectorAll("li");
const resultText = document.querySelector(".result");
let selection;

ratings.forEach((li) => {
    li.addEventListener('click', function() {
        ratings.forEach((li) => {
            li.classList.add("hover");
            li.classList.remove("selected");
            li.classList.remove("was-selected");
        });
        li.classList.add("selected");
        li.classList.remove("hover");
        li.classList.add("was-selected");
    });
});




submit.addEventListener('click', function (){
    const selected = document.querySelector(".was-selected");
    let result = selected.textContent
    cardFront.classList.add("hide");
    cardBack.classList.remove("hide");
    body.style.backgroundColor = "#131518";
    resultText.textContent = `You selected ${result} out of 5`

});
