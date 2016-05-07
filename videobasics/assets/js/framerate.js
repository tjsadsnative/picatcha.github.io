document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.createElement('canvas');
  var screen = canvas.getContext('2d');
  var text = 'Can you read this text?';
  document.getElementById('frameRateInput').parentNode.insertBefore(canvas, document.getElementById('frameRateInput'));
  canvas.width = document.body.offsetWidth;
  canvas.height = 300;
  
  window.onresize = function() {    
    canvas.width = document.body.offsetWidth;
  };
  
  var frame = 0,
    frameRate = 24,
    time = new Date(),
    bodies = [],
    aspectWidth = 16,
    aspectHeight = 9;

      bodies.push(new Ball(canvas, {
          x: canvas.width/2,
          y: canvas.height/3,
          radius: 20
        }));
      bodies.push(new Ball(canvas, {
          x: canvas.width/3,
          y: canvas.height/3,
          radius: 40
        }));
      bodies.push(new Ball(canvas, {
          x: canvas.width/1.5,
          y: canvas.height/3,
          radius: 60
        }));
  
  var tick = function() {
    screen.clearRect(0,0, canvas.width, canvas.height);
    screen.font="20px Verdana";
    screen.fillText(frame + ' Frame, ' + (new Date() - time) + 'ms', document.body.offsetWidth/2, 50); 

    if (frame >= frameRate) {
      screen.font="40px Verdana";
      screen.textAlign = 'center';
      screen.fillText(text, canvas.width/2, canvas.height/2);
      frame = 0;
      time = new Date();
    }
    frame++;
    
    for (var i=0, body; i<bodies.length; i++) {
      body = bodies[i];
      body.update(frameRate);
      body.render(screen);
    }    
    
    setTimeout(tick, 1000/frameRate);

    // Update aspectratio
    updateAspectRatio();
  };
  tick();
  
  document.getElementById('frameRateInput').value = frameRate;
  document.getElementById('frameRateInput').addEventListener('change', function(e) {
    frame = 0;
    time = new Date();
    frameRate = parseInt(e.target.value);
  });
  
  document.getElementById('aspectWidthInput').value = aspectWidth;
  document.getElementById('aspectHeightInput').value = aspectHeight;
  function updateAspectRatio() {
    document.getElementById('aspectWidthInput').addEventListener('change', function(e) {
      aspectWidth = parseInt(e.target.value),
      aspectHeight = document.getElementById('aspectHeightInput').value;

      var aspectRatio = 'padding-top : '+((aspectHeight / aspectWidth) * 100)+'%';
      document.styleSheets[0].addRule('.sixteen-nine:before', aspectRatio);
    });
    document.getElementById('aspectHeightInput').addEventListener('change', function(e) {
      aspectHeight = parseInt(e.target.value),
      aspectWidth = document.getElementById('aspectWidthInput').value;

      var aspectRatio = 'padding-top : '+((aspectHeight / aspectWidth) * 100)+'%';
      document.styleSheets[0].addRule('.sixteen-nine:before', aspectRatio);

    });
  }
});

function Ball(canvas, options) {
  this.canvas = canvas;
  this.radius = options.radius || 30;
  this.position = {
    x: options.x,
    y: options.y
  }
  this.speed = 0;
  this.gravity = 0.1;
};
Ball.prototype = {
  update: function(frameRate) {
    this.position.y += this.speed;  
    this.speed += this.gravity * 1000/frameRate;
    if (this.position.y >= this.canvas.height - this.radius) {
      this.speed = -this.speed + this.gravity;
      this.position.y = this.canvas.height - this.radius;
    }
    
    if (this.position.y < this.canvas.height/3) {
      this.position.y = this.canvas.height/3;
      this.speed = 0;
    }
  },
  render: function(screen) {
    screen.beginPath();
    screen.fillStyle = '#4acaa8';
    screen.arc(this.position.x, this.position.y,this.radius,0,2*Math.PI);
    screen.fill();
    screen.stroke();
  }
}
