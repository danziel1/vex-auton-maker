class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode(x, y, dir=0) {
        this.nodes.push(new Node(x, y, dir));
    }




    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const node of this.nodes) {
            node.draw(ctx);
        }
    }


}