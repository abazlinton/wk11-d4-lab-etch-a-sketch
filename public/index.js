var a;

var app = function() {
  var canvas = document.getElementById('main-canvas');
  // console.log(canvas);
  var context = canvas.getContext('2d');
  // console.log(context);
  //
  // context.fillStyle="#C89F9C";
  // context.fillRect(10, 10, 120 , 120);
  //
  // context.beginPath();
  // context.moveTo(100, 100);
  // context.lineTo(100, 200);
  // context.stroke();
  //
  // context.beginPath();
  // context.moveTo(200, 200);
  // context.lineTo(200, 300);
  // context.lineTo(100, 300);
  // context.closePath();
  // context.fillStyle = 'dodgerblue';
  // context.fill();
  //




  // canvas.onmousemove = function(event){
  //
  //   drawCircle(event.layerX, event.layerY)
  // };
  //
  // var img = document.createElement('img');
  // img.src = "http://www.codebearsoftware.com/BearCoding.jpg";
  //
  // var drawBear = function(){
  //   context.drawImage(img, 300, 300, 100, 100);
  // };
  //
  // img.onload = drawBear;
  //
  // console.log(a);
  // a = 0;

  // var colorPicker = document.querySelector('#input-color');
  // colorPicker.onchange = changeColor;
  //
  // var changeColor = function(){
  //   console.log(this.value);
  //   context.fillStyle = this.value;
  // };

  document.onkeydown = checkKey;

  var x = 0;
  var y = 0;

  function checkKey() {
    console.log(event);
    if (event.keyCode == '38') {
      y-=4;
    } else if (event.keyCode == '40') {
      y+=4;
    } else if (event.keyCode == '37') {
       x-=4;
    } else if (event.keyCode == '39') {
      x+=4;
    }

    if (x<0){
      x=2;
    } else if (y<0){
      y=2;
    } else if (x>599){
      x=599;
    } else if (y>497){
      y=497;
    }
    console.log(x,y);

    // var drawCircle = function(x, y) {
    //   context.beginPath();
    //   context.arc(x,y,3,0,Math.PI*2,true);
    //   context.fill();
    // };

    context.fillRect(x, y, 4, 4);

    // drawCircle(x,y);
}

};

window.onload = app;
