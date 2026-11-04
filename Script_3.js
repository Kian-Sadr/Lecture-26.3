//Collecting elements for easier reading later
let canvas = document.getElementById("paint");
let context = canvas.getContext("2d");

context.beginPath();
context.moveTo(50, 190);
context.lineTo(200, 10);

context.closePath()

context.strokeStyle = "lime";
contnet.fill();

context.strokeStyle = "navy";
context.lineWidth = 3;
context.stroke();

context.beginPath()
context.lineTo(20, 100);
context.lineTo();
context.fillStyle = "red";
context.linewidth = 10;
context.stroke();
