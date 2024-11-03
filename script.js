// Simple interactivity: toggling more info for each planet on click
document.querySelectorAll('.planet-card').forEach(card => {
    card.addEventListener('click', () => {
        const info = card.querySelector('p');
        info.style.display = (info.style.display === 'none' || info.style.display === '') ? 'block' : 'none';
    });
});
