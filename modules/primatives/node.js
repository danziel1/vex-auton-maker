class Node {
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.dir = dir;
    }

    draw(ctx, size = 10, color = "black") {
        const rad = size / 2;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
        ctx.fill();
    }
}