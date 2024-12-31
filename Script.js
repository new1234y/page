// Vérifie si le compteur existe dans le localStorage
let count = localStorage.getItem('visitorCount') ? parseInt(localStorage.getItem('visitorCount')) : 0;

// Affiche le nombre de visiteurs
document.getElementById('visitor-count').textContent = count;

// Fonction pour ajouter un visiteur
function addVisitor() {
    count++;
    localStorage.setItem('visitorCount', count);
    document.getElementById('visitor-count').textContent = count;
}

// Fonction pour mettre à jour le compteur toutes les 10 secondes
function updateCounter() {
    let storedCount = localStorage.getItem('visitorCount') ? parseInt(localStorage.getItem('visitorCount')) : 0;
    if (storedCount !== count) {
        count = storedCount;
        document.getElementById('visitor-count').textContent = count;
    }
}

// Ajoute un événement au bouton
document.getElementById('increment-btn').addEventListener('click', addVisitor);

// Met à jour le compteur toutes les 10 secondes
setInterval(updateCounter, 10000);
