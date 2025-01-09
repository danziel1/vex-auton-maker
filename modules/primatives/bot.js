class Bot {
    constructor(x, y, length, width, angle) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.width = width;
        this.angle = angle;
        this.img = new Image();
        this.angleOffset = angle;
    }

    draw(ctx) {
        this.img.src = './assets/images/robot.png';
        this.img.onload = () => {
            ctx.save();
            ctx.translate(this.x + this.width / 2, this.y + this.length / 2);
            ctx.rotate(Math.PI / 180 * (this.angle));
            ctx.drawImage(this.img, -this.width/2, -this.length/2, this.width, this.length);
            ctx.restore();
        };
    }

}