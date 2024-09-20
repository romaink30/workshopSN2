// Déclaration des étapes de l'histoire
let storySteps = [
    " Bon première matinée finie on avance sur notre projet Workshop",
    "là on va se régaler, sinon toi le quizz ",
    "c’est bien passer, bien jouer tu commences à être chaud ",
    "te refroidis pas le troisième niveau t’attend ne me lâches pas maintenant ! "
];

let currentStep = 0;

// Fonction pour passer à l'étape suivante
function nextStep() {
    if (currentStep < storySteps.length - 1) {
        currentStep++;
        updateStory();
    }

    // Si on arrive à la fin de l'histoire, on cache le bouton "Continuez" et on montre le bouton "Quiz"
    if (currentStep === storySteps.length - 1) {
        document.getElementById('nextButton').style.display = 'none';
        document.getElementById('quizButton').style.display = 'inline';
    }
}

// Fonction pour revenir à l'étape précédente
function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        updateStory();
    }

    // Si on revient en arrière, on montre de nouveau le bouton "Continuez"
    if (currentStep < storySteps.length - 1) {
        document.getElementById('nextButton').style.display = 'inline';
        document.getElementById('quizButton').style.display = 'none';
    }
}

// Fonction pour mettre à jour la bulle de texte avec le texte de l'étape courante
function updateStory() {
    document.getElementById('speechBubble').textContent = storySteps[currentStep];
}

// Fonction pour accéder au quiz
function goToQuiz() {
    window.location.href = "quizz3.html"; // Redirige vers la page du quiz
}

// Initialisation du texte
updateStory();
