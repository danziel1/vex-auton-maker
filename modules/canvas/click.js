var canvas = document.getElementById('canvas');

canvas.addEventListener('click', function(event) {
    var rect = canvas.getBoundingClientRect();
    var x = Math.round(event.clientX - rect.left);
    var y = Math.round(event.clientY - rect.top);

    console.log("Clicked ("+x+", "+y+")");
    graph.addNode(x, y);
graph.draw(ctx);

});