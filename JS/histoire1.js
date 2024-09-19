// Déclaration des étapes de l'histoire
let storySteps = [
    "Salut à tous les amis !",
    "Pour commencer ma journée avant de me rendre à l’EPSI",
    "je vais vous proposer un quizz sur un thèmes informatique à vous de jouer bon allez je vais louper mon train a toute !!Ceci est votre première étape.",
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
    window.location.href = "quiz.html"; // Redirige vers la page du quiz
}

// Initialisation du texte
updateStory();
