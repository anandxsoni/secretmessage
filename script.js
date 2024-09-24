document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const secretMessage = document.getElementById('secretMessage');
    
    revealButton.addEventListener('click', function() {
        // Toggle the hidden class to reveal the message
        if (secretMessage.classList.contains('hidden')) {
            secretMessage.classList.remove('hidden');
            revealButton.textContent = 'Hide Message';
        } else {
            secretMessage.classList.add('hidden');
            revealButton.textContent = 'Reveal Secret Message';
        }
    });
});
