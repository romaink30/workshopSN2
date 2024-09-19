// Déclaration des étapes de l'histoire
let storySteps = [
    "Alors je suppose que si vous êtes là c’est que vous avez passer le premier niveau",
    " bien jouer jeune soldat",
    "moi je viens a peine d’arriver en gare je pars à pied direction l’EPSI",
    "pendant ce temps-là attaque toi au deuxième niveau je compte sur toi !"
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
