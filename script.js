document.addEventListener('DOMContentLoaded', function() {
    // Card flip animation
    const card = document.getElementById('card');
    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
    
    // Promise button
    const promiseBtn = document.getElementById('promiseBtn');
    const thanksMessage = document.getElementById('thanksMessage');
    
    promiseBtn.addEventListener('click', function() {
        thanksMessage.classList.remove('hidden');
        
        // Add confetti effect
        createConfetti();
        
        // Make button unclickable after clicked
        this.disabled = true;
        this.textContent = "Спасибо! ❤️";
    });
    
    // Highlight list items on hover
    const reasonsList = document.querySelectorAll('#reasons-list li');
    reasonsList.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.color = '#e91e63';
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'all 0.3s';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.color = '#333';
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Create confetti effect
    function createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        document.body.appendChild(confettiContainer);
        
        // Create multiple confetti pieces
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.backgroundColor = getRandomColor();
            confettiContainer.appendChild(confetti);
        }
        
        // Remove confetti after animation
        setTimeout(() => {
            confettiContainer.remove();
        }, 5000);
    }
    
    // Helper for random colors
    function getRandomColor() {
        const colors = ['#e91e63', '#ffccd5', '#ff94a1', '#ff5c7f', '#f48fb1'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Add CSS for confetti
    const style = document.createElement('style');
    style.innerHTML = `
        .confetti-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
        }
        
        .confetti {
            position: absolute;
            top: -10px;
            width: 10px;
            height: 10px;
            opacity: 0.7;
            animation: fall linear forwards;
        }
        
        @keyframes fall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.7;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

