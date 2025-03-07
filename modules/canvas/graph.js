class Graph {
    constructor() {
        this.nodes = [];
        this.bot = NaN;
        this.botLength = (12 * canvas.height) / 144;
        this.botWidth = (12 * canvas.height) / 144;
        this.driveDirection = "forward"
        this.botStartPos = "custom";
    }

    addNode(x, y, dir=this.driveDirection) {
        this.nodes.push(new Node(x, y, dir));
    }


    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (this.bot) {
            this.bot.draw(ctx);
        }
        for (let i=0; i<this.nodes.length-1; i++) {
            var seg = new Segment(this.nodes[i], this.nodes[i+1]);
            seg.draw(ctx);
        }
        for (const node of this.nodes) {
            node.draw(ctx);
        }
    }


}