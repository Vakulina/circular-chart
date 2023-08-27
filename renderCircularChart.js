export function renderCircularChart(canvas, sectors) {
    const centerX = canvas.clientWidth / 2;
    const centerY = canvas.clientHeight/ 2;
    const ctx = canvas.getContext('2d');
    const styles = getComputedStyle(document.documentElement);

    let radianOffset = 0;
    sectors.forEach(sector => {
        const { fraction, radius, color } = sector;
        const radianAngle = radianOffset + 2 * Math.PI * fraction;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, radianOffset, radianAngle);
        ctx.lineTo(centerX, centerY);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
        radianOffset = radianAngle;
    });

    ctx.beginPath();
    ctx.arc(centerX, centerY, 33, 0, 2* Math.PI);
    ctx.closePath();
    ctx.fillStyle = styles.getPropertyValue('--black');
    ctx.fill();



}


