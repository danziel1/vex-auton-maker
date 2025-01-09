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
        graph.bot = new Bot(graph.nodes[0].x - (botLength/2), graph.nodes[0].y - (botWidth/2), 50, 50, angle);
    }
    if (graph.nodes.length > 0) { // not first point 
        var xDist = x - graph.nodes[graph.nodes.length - 1].x;
        var yDist = y - graph.nodes[graph.nodes.length - 1].y;
        var angle = Math.round(Math.atan2(yDist, xDist) * 180/Math.PI + 90);
        document.getElementById('outputCode').innerHTML += "chassis.turn_to_angle("+(angle - graph.bot.angleOffset)+");<br>";

xInches = (xDist / canvas.width) * 144;
yInches = (yDist / canvas.height) * 144;

console.log(canvas.width, canvas.height);
console.log(xDist, yDist);
console.log(xInches, yInches);

var distance = Math.round(Math.sqrt(xInches ** 2 + yInches ** 2));
console.log(distance);

        
        document.getElementById('outputCode').innerHTML += "chassis.drive_distance("+(distance)+");<br>";

        
    }
    graph.addNode(x, y, moveDirection);
    graph.draw(ctx);

});