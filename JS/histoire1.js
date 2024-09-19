let storyIndex = 0;
const stories = [
    "La vie étudiante est pleine de découvertes. Entre les cours, les amis, et les projets, chaque jour est une nouvelle aventure ! N'oubliez pas de profiter de chaque instant et de faire des pauses pour vous ressourcer.",
    "En plus des cours, il y a les soirées entre amis, les événements de campus, et même les stages qui ajoutent à l'expérience. Chaque moment compte et forge des souvenirs inoubliables.",
    "Mais attention, le stress peut aussi faire partie de la vie étudiante. N'hésitez pas à demander de l'aide et à trouver des moments pour vous détendre."
];

document.getElementById('next-button').addEventListener('click', () => {
    storyIndex++;
    updateStory();
});

document.getElementById('prev-button').addEventListener('click', () => {
    storyIndex--;
    updateStory();
});

function updateStory() {
    const storyText = document.getElementById('story-text');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const quizButton = document.getElementById('quiz-button');

    storyText.innerText = stories[storyIndex];

    // Gérer la visibilité des boutons
    prevButton.style.display = storyIndex > 0 ? 'inline-block' : 'none'; // Afficher ou cacher le bouton "Précédent"
    nextButton.style.display = storyIndex < stories.length - 1 ? 'inline-block' : 'none'; // Cacher le bouton "Suivant" si on arrive à la fin

    if (storyIndex >= stories.length - 1) {
        nextButton.style.display = 'none'; // Cacher le bouton "Suivant"
        quizButton.style.display = 'inline-block'; // Afficher le bouton "Accédez au quiz"
    } else {
        quizButton.style.display = 'none'; // Cacher le bouton quiz si on n'est pas à la fin
    }
}

// Initialisation
updateStory();
