// Afficher la modale lorsqu'on clique sur la porte
document.querySelector('.door').addEventListener('click', function() {
    document.getElementById('codeEntry').style.display = 'block';
});

// Vérifier le code de déverrouillage
document.getElementById('unlockBtn').addEventListener('click', function() {
    const code = document.getElementById('code').value;
    const message = document.getElementById('message');
    

    if (code === "train") {
        message.style.color = 'green';
        message.textContent = 'Bravo, la porte est déverrouillée !';
        document.querySelector('.door').classList.add('open');  // Ajouter la classe 'open'
        document.getElementById('codeEntry').style.display = 'none';
    } else {
        message.style.color = 'red';
        message.textContent = 'Code incorrect. Essayez encore.';
    }
});
