let openPopUp = document.querySelector(".js-popUpOpen");
let closepopup = document.querySelector(".js-popUpClose");
let backgroundPopUp = document.querySelector(".js-popUpBackground");
let mainPopUp = document.querySelector(".js-popUp");
let bodypopup = document.querySelector(".js-popUpBody");
let form = document.querySelector(".js-form");
let answers = Array.from(document.querySelectorAll(".js-answer"));
let allQuestions = document.querySelectorAll(".js-question");

let handlequizz = (e) => {
    e.preventDefault();

    let checkedAnswers = answers.filter(answer => answer.checked)

    let isTrue = checkedAnswers.every(answer => answer.value === "true")
    let allChecked = checkedAnswers.length === allQuestions.length
    if (!allChecked) {
        mainPopUp.classList.replace("popUp", "popUp--active")
        backgroundPopUp.classList.replace("popUp__background", "popUp__background--active")
        bodypopup.textContent = "Vous n'avez pas noté toutes les réponses ! :(";
        return
    }

    checkedAnswers.forEach(answer => {
        let ifCorrect = answer.value === "true"
        let answerBox = answer.closest("ol")

        if (ifCorrect){
            answerBox.classList.add("js-correct")
            answerBox.classList.remove("js-incorrect")
        } else {
            answerBox.classList.add("js-incorrect")
            answerBox.classList.remove("js-correct")
        }
        
    });
    

    if(isTrue && allChecked){
        mainPopUp.classList.replace("popUp", "popUp--active")
        backgroundPopUp.classList.replace("popUp__background", "popUp__background--active")
        bodypopup.textContent = "Félicitations ! Vous avez réussi le quizz ! Le mot de passe pour déverouiller la porte est 'train'";
    }
    else {
        mainPopUp.classList.replace("popUp", "popUp--active")
        backgroundPopUp.classList.replace("popUp__background", "popUp__background--active")
        bodypopup.textContent = "Vous avez perdu... Réessayez !";
    }

}
form.addEventListener('submit', handlequizz);

openPopUp.addEventListener('click', () => {
    mainPopUp.classList.replace("popUp", "popUp--active")
    backgroundPopUp.classList.replace("popUp__background", "popUp__background--active")
})

closepopup.addEventListener('click', () => {
    mainPopUp.classList.replace("popUp--active", "popUp");
    backgroundPopUp.classList.replace("popUp__background--active", "popUp__background");

})


const bubbleText = document.getElementById("bubbleText");
const nextLevelButton = document.getElementById("nextLevelButton");

// Exemple de texte à afficher dans la bulle
const texts = ["Salut, je parle !", "Comment ça va ?", "Félicitations, niveau terminé !", "Bon courage pour le prochain niveau !"];

// Index actuel pour suivre le texte
let index = 0;

// Fonction pour changer le texte lorsque l'utilisateur clique sur "Prochain niveau"
nextLevelButton.addEventListener("click"), () => {
    index = (index + 1) % texts.length;
    bubbleText.innerText = texts[index];
}
