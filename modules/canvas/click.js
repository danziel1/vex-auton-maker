var canvas = document.getElementById('canvas');


var moveDirection = 0;

canvas.addEventListener('click', function(event) {
    var rect = canvas.getBoundingClientRect();
    var x = Math.round(event.clientX - rect.left);
    var y = Math.round(event.clientY - rect.top);

    console.log("Clicked ("+x+", "+y+")");
    if (graph.nodes.length == 1) { // 1 point already placed -> place bot
        var xDist = x - graph.nodes[0].x;
        var yDist = y - graph.nodes[0].y;
        var angle = Math.round(Math.atan2(yDist, xDist) * 180/Math.PI + 90);
        graph.bot = new Bot(graph.nodes[0].x - (graph.botLength/2), graph.nodes[0].y - (graph.botWidth/2), graph.botLength, graph.botWidth, angle);
    }
    if (graph.nodes.length > 0) { // not first point 
        var xDist = x - graph.nodes[graph.nodes.length - 1].x;
        var yDist = y - graph.nodes[graph.nodes.length - 1].y;
        var angle = Math.round(Math.atan2(yDist, xDist) * 180/Math.PI + 90);
        if (graph.nodes[graph.nodes.length - 1].dir == "reverse") {
            angle += 180;
        }
        while (angle >= 360) {
            angle -= 360;
        }
        document.getElementById('outputCode').innerHTML += "chassis.turn_to_angle("+(angle - graph.bot.angleOffset)+");<br>";
        xInches = (xDist / canvas.width) * 144;
        yInches = (yDist / canvas.height) * 144;
        var distance = Math.round(Math.sqrt(xInches ** 2 + yInches ** 2));

        
        document.getElementById('outputCode').innerHTML += "chassis.drive_distance("+(distance)+");<br>";

        
    }
    if (graph.nodes.length > 1) {
        graph.nodes[graph.nodes.length - 1].dir = graph.driveDirection;
    }
    graph.addNode(x, y);
    graph.draw(ctx);

});