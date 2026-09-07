// Draw the mandala divider petals procedurally
function drawMandala() {
    const group = document.getElementById('petals');
    if (!group) return;
    const ns = 'http://www.w3.org/2000/svg';
    const petalCount = 12;
    const cx = 100, cy = 100, r1 = 20, r2 = 45;

    for (let i = 0; i < petalCount; i++) {
        const angle = (i / petalCount) * Math.PI * 2;
        const x1 = cx + r1 * Math.cos(angle);
        const y1 = cy + r1 * Math.sin(angle);
        const x2 = cx + r2 * Math.cos(angle);
        const y2 = cy + r2 * Math.sin(angle);
        const line = document.createElementNS(ns, 'line');
        line.setAttribute('x1', x1.toFixed(2));
        line.setAttribute('y1', y1.toFixed(2));
        line.setAttribute('x2', x2.toFixed(2));
        line.setAttribute('y2', y2.toFixed(2));
        group.appendChild(line);
    }
}

// Placeholder navigation — swap the alert for a real route/screen per game
function handleGameSelect(gameId) {
    console.log('Selected game:', gameId);
    alert(`"${gameId.replace(/-/g, ' ')}" isn't built yet — this is where it will launch.`);
}

document.addEventListener('DOMContentLoaded', () => {
    drawMandala();

    document.getElementById('playBtn')?.addEventListener('click', () => {
        console.log('Play pressed');
    });

    document.querySelectorAll('.tile').forEach((btn) => {
        btn.addEventListener('click', () => handleGameSelect(btn.dataset.game));
    });
});