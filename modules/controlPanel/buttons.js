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

}

function startBack() {

}

function moveForward() {
    graph.driveDirection = "forward"
}

function moveReverse() {
    graph.driveDirection = "reverse"
}

function intakeIn() {

}

function intakeOut() {

}

function addDelay() {

}

function toggleClamp() {

}

function removeAll() {

}

function animate() {

}