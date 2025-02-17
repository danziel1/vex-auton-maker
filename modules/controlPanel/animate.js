function moveDist(dist) {
    dist = dist*canvas.width/144;
    return new Promise((resolve) => {
        var angle = (graph.bot.angle - 90) * Math.PI / 180;
        var steps = Math.ceil(Math.abs(dist));
        var interval = 5;
        var step = 0;

        function moveStep() {
            if (step < steps) {
                graph.bot.x += (dist / steps) * Math.cos(angle);
                graph.bot.y += (dist / steps) * Math.sin(angle);
                graph.draw();
                step++;
                setTimeout(moveStep, interval);
            } else {
                resolve();
            }
        }

        moveStep();
    });
}

function turnTo(targetAngle) {
    return new Promise((resolve) => {
        var startAngle = (graph.bot.angle - 90) * Math.PI / 180;
        var angleDiff = targetAngle - startAngle;
        var steps = Math.ceil(Math.abs(angleDiff));
        var interval = 3;
        var step = 0;

        function turnStep() {
            if (step < steps) {
                graph.bot.angle += angleDiff / steps;
                graph.draw();
                step++;
                setTimeout(turnStep, interval);
            } else {
                resolve();
            }
        }

        turnStep();
    });
}