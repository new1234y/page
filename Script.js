// Clé utilisée pour le compteur dans localStorage
const counterKey = 'connectedUsers';

// Mettre à jour le compteur des connexions
function updateCounter() {
    // Récupère le compteur actuel ou initialise à 0
    let count = parseInt(localStorage.getItem(counterKey) || '0', 10);

    // Incrémente le compteur
    count++;

    // Met à jour localStorage avec la nouvelle valeur
    localStorage.setItem(counterKey, count);

    // Affiche la valeur mise à jour sur la page
    document.getElementById('counter').textContent = count;

    return count;
}

// Mettre à jour le compteur et afficher
updateCounter();

// Quand l’utilisateur ferme la page, on décrémente
window.addEventListener('beforeunload', () => {
    let count = parseInt(localStorage.getItem(counterKey) || '0', 10);
    if (count > 0) {
        count--;
        localStorage.setItem(counterKey, count);
    }
});
