// Obtenir le compteur existant ou initialiser à 1
const counterKey = 'connectedUsers';
let count = parseInt(sessionStorage.getItem(counterKey) || '0', 10) + 1;

// Mettre à jour la valeur dans sessionStorage
sessionStorage.setItem(counterKey, count);

// Afficher le compteur sur la page
document.getElementById('counter').textContent = count;
