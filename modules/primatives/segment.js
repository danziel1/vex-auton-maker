class Segment {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    draw(ctx) {
        var blackWidth = 2;
        var dirColorWidth = 5
        ctx.beginPath();
        ctx.lineWidth = dirColorWidth;
        if (this.p1.dir == 0) {
            ctx.strokeStyle = "green";
        }
        else {
            ctx.strokeStyle = "red";
        }
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = blackWidth;
        ctx.strokeStyle = "black";
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();

    }
}