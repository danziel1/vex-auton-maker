function setBotLength() {
    length = prompt("Enter Length (inches)"); // needs pixel-inch conversion
    
    graph.botLength = (length * canvas.height) / 144;
    console.log("Set bot length to " + graph.botLength);
}

function setBotWidth() {
    width = prompt("Enter Width (inches)"); // needs pixel-inch conversion
    
    graph.botWidth = (width * canvas.width) / 144;
    console.log("Set bot width to " + graph.botWidth);
}

function startUp() {
    graph.botStartPos = "up";
}

function startBack() {
    graph.botStartPos = "back";
}

function moveForward() {
    graph.driveDirection = "forward"
}

function moveReverse() {
    graph.driveDirection = "reverse"
}

function intakeIn() {
    document.getElementById('outputCode').innerHTML += "Intake.spin(forward, 100, pct);<br>";
}

function intakeOut() {
    document.getElementById('outputCode').innerHTML += "Intake.spin(reverse, 100, pct);<br>";
}

function addDelay() {
    delay = prompt("Enter Delay (msec)");
    document.getElementById('outputCode').innerHTML += "wait(" + delay + ", msec);<br>";
}

var clampState = false;
function toggleClamp() {
    clampState = !clampState;
    document.getElementById('outputCode').innerHTML += "Clamp.set("+clampState+");<br>";
}

function removeAll() {
    graph = new Graph();
    moveDirection = 0; // resets move direction
    document.getElementById('outputCode').innerHTML = ""; // clears output
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clears screen

    console.log("Reset canvas");
}

function animateSequence() {
    var code = document.getElementById('outputCode').innerHTML.split("<br>");
    for (var i = 0; i < code.length; i++) {
        if (code[i].includes("chassis.drive_distance")) {
            var moveAmount = code[i].split("(")[1].split(")")[0];
            console.log("Moving "+moveAmount+" inches");
            moveDist(moveAmount);
        }
    }
}