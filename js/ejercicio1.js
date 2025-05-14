document.addEventListener('DOMContentLoaded', function() {
            const startBtn = document.getElementById('start-btn');
            const submitBtn = document.getElementById('submit-btn');
            const restartBtn = document.getElementById('restart-btn');
            const guessInput = document.getElementById('guess-input');
            const startSection = document.getElementById('start-section');
            const gameSection = document.getElementById('game-section');
            
            let magicNumber = 0;
            let gameActive = false;

            startBtn.addEventListener('click', function() {
                magicNumber = Math.floor(Math.random() * 100) + 1;
                gameActive = true;
                startSection.classList.add('hidden');
                gameSection.classList.remove('hidden');
                guessInput.value = '';
                guessInput.focus();
                console.log("Número mágico:", magicNumber);
            });

            submitBtn.addEventListener('click', function() {
                if (!gameActive) return;
                
                const userGuess = parseInt(guessInput.value);
                
                if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                    alert("Por favor ingresa un número válido entre 1 y 100");
                    return;
                }
                
                if (userGuess === magicNumber) {
                    alert("¡Felicidades! ¡Adivinaste el número mágico!");
                    gameActive = false;
                } else if (userGuess < magicNumber) {
                    alert("El número mágico es MAYOR que " + userGuess);
                } else {
                    alert("El número mágico es MENOR que " + userGuess);
                }
                
                guessInput.value = '';
                guessInput.focus();
            });
            
            restartBtn.addEventListener('click', function() {
                gameActive = false;
                gameSection.classList.add('hidden');
                startSection.classList.remove('hidden');
            });
            
            guessInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    submitBtn.click();
                }
            });
        });