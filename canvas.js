var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//c.fillStyle = 'rgba(255, 0, 0, 0.5)';
//c.fillRect(100, 100, 100, 100);
//c.fillStyle = 'rgba(0, 0, 255, 0.5)';
//c.fillRect(300, 100, 100, 100);

console.log(canvas);

// line
c.beginPath();
// starting point
//c.moveTo(50,300);

// create a line
//c.lineTo(300, 100);
//c.lineTo(400, 300);
//c.strokeStyle = "maroon"
//c.stroke();

// arc
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.stroke();
//c.strokeStyle = 'blue';
//c.stroke();

var mouseX = 1;
var mouseY = 1;

canvas.addEventListener("mousemove", e => {
  [mouseX, mouseY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("click", e => {
  if(goingCrazy){
    window.clearInterval(interval);
    goingCrazy = false;
  }else{
    goCrazy();
  }
}); 

canvas.addEventListener('mousemove', e => {
    c.clearRect(0, 0, canvas.width, canvas.height);
    draw();
});

function draw() {
  for (var i = 0; i < 100; i++) {
    var xRan = mouseX / window.innerWidth;
    var yRan = mouseY / window.innerHeight;
    var avgRan = (xRan + yRan) / 2;
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    
    var color = `rgba(${Math.round(xRan * 255)}, ${Math.round(yRan * 255)}, ${Math.round(avgRan * 255)}, 0.8)`;
    c.strokeStyle = color;
    c.fillStyle = color;
    c.fill();
    c.stroke();
  }
}

var interval;
var goingCrazy;

function goCrazy() {
  goingCrazy = true;
  interval = window.setInterval(() => {
    c.clearRect(0, 0, canvas.width, canvas.height);
    draw();
  }, 300);
  
  console.log(interval);
}

goCrazy();

