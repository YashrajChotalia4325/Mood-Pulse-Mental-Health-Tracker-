// Confetti Animation
const confettiContainer = document.querySelector('.confetti-container');
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = '${Math.random() * 100}vw';
        confetti.style.animationDuration = '${Math.random() * 3 + 2}s';
        confettiContainer.appendChild(confetti);
    }
}
createConfetti();

// Quotes & Jokes
const quotes = [
    "Happiness is not by chance, but by choice. 😊",
    "Life is better when you're laughing. 😂",
    "Smile! It increases your face value. 😁",
    "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾🤣",
    "I told my wife she should embrace her mistakes… she gave me a hug.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I used to play piano by ear… but now I use my hands.",
    "I asked the librarian if the library had any books on paranoia… she whispered, They're right behind you!"
];

function generateQuote() {
    document.getElementById('quote').innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

// Auto-generate first quote
generateQuote();