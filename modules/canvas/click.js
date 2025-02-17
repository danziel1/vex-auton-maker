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
        if (graph.botStartPos == "custom") {
            console.log('Start custom');
            graph.bot = new Bot(graph.nodes[0].x - (graph.botLength/2), graph.nodes[0].y - (graph.botWidth/2), graph.botLength, graph.botWidth, angle);
        }
        else if (graph.botStartPos == "up") {
            console.log('Start up');
            graph.nodes[0].x = canvas.width/10.25;
            graph.bot = new Bot(canvas.width/11, graph.nodes[0].y - (graph.botWidth/2), graph.botLength, graph.botWidth, angle);
        }
        else { // start back
            console.log('Start back'); 
            graph.nodes[0].x = canvas.width/50;
            graph.bot = new Bot(canvas.width/50, graph.nodes[0].y - (graph.botWidth/2), graph.botLength, graph.botWidth, angle);
        }
        console.log(graph.nodes);
    }
    if (graph.nodes.length > 0) { // not first point 
        var xDist = x - graph.nodes[graph.nodes.length - 1].x;
        var yDist = y - graph.nodes[graph.nodes.length - 1].y;
        var angle = Math.round(Math.atan2(yDist, xDist) * 180/Math.PI + 90);
        if (graph.nodes[graph.nodes.length - 1].dir == "reverse") {
            angle += 180;
        }
        while (angle - graph.bot.angleOffset >= 360) {
            angle -= 360;
        }
        while (angle - graph.bot.angleOffset < 0) {
            angle += 360;
        }
        if (graph.nodes.length != 1) { // if placing 2nd node -> turns to 0 deg which is useless
            document.getElementById('outputCode').innerHTML += "chassis.turn_to_angle("+(angle - graph.bot.angleOffset)+");<br>";
        }
        xInches = (xDist / canvas.width) * 144;
        yInches = (yDist / canvas.height) * 144;
        var distance = Math.round(Math.sqrt(xInches ** 2 + yInches ** 2));

        if (graph.driveDirection == "reverse") {
            distance *= -1;
        } 
        document.getElementById('outputCode').innerHTML += "chassis.drive_distance("+(distance)+");<br>";

        
    }
    if (graph.nodes.length > 1) {
        graph.nodes[graph.nodes.length - 1].dir = graph.driveDirection;
    }
    graph.addNode(x, y);
    graph.draw(ctx);

});