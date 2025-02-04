function moveDist(dist) {
    dist *= canvas.width/144;
    var angle = graph.bot.angle - 90;
    var steps = Math.ceil(Math.abs(dist));
    var interval = 3; // update interval for how fast the bot moves
    var step = 0;

    function moveStep() {
        if (step < steps) {
            graph.bot.x += (dist / steps) * Math.cos(angle * Math.PI / 180);
            graph.bot.y += (dist / steps) * Math.sin(angle * Math.PI / 180);
            graph.draw();
            step++;
            setTimeout(moveStep, interval);
        }
    }

    moveStep();
}

function turnTo(targetAngle) {
    var startAngle = graph.bot.angle;
    var angleDiff = targetAngle - startAngle;
    var steps = Math.abs(angleDiff / 5);
    var interval = 50;
    var step = 0;

    function turnStep() {
        if (step < steps) {
            graph.bot.angle += angleDiff / steps;
            graph.draw();
            step++;
            setTimeout(turnStep, interval);
        }
    }

    turnStep();
}