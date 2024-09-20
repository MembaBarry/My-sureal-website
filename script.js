document.querySelectorAll('.melting-clock').forEach(clock => {
    clock.addEventListener('mouseover', () => {
        clock.style.animation = 'none';
    });

    clock.addEventListener('mouseout', () => {
        clock.style.animation = 'melt 4s infinite alternate';
    });
})
