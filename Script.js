let connectedUsers = 0;

function updateCount() {
    const countElement = document.getElementById('count');
    connectedUsers += Math.floor(Math.random() * 5); // Simule des connexions aléatoires
    countElement.textContent = connectedUsers;
}

setInterval(updateCount, 1000); // Met à jour le compte toutes les secondes
