(function() {
    const canvas = document.getElementById('splash-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    let frame = 0;
    function draw() {
        ctx.fillStyle = '#0b1020';
        ctx.fillRect(0, 0, width, height);

        const centerX = width / 2;
        const centerY = height / 2;
        const pulse = Math.sin(frame * 0.05) * 0.5 + 0.5;

        // Draw "Miriam AI" Neon Text
        ctx.font = '900 4rem "Plus Jakarta Sans", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Glow effect
        ctx.shadowColor = '#e21e80';
        ctx.shadowBlur = 10 + pulse * 20;
        ctx.fillStyle = '#fff';
        ctx.fillText('MIRIAM AI', centerX, centerY);

        // Subtitle
        ctx.shadowColor = '#1e30f3';
        ctx.shadowBlur = 5;
        ctx.font = '300 1rem "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fillText('INICIALIZANDO SISTEMAS...', centerX, centerY + 60);

        // Simple tech lines
        ctx.strokeStyle = 'rgba(124, 231, 255, 0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX - 150, centerY + 30);
        ctx.lineTo(centerX + 150, centerY + 30);
        ctx.stroke();

        frame++;
        requestAnimationFrame(draw);
    }
    draw();
})();
