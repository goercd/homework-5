var square = document.getElementById('square');

square.onmousedown = function(e) { 

  square.style.position = 'absolute';
  moveAt(e);
  document.body.appendChild(square);

  square.style.zIndex = 1000; 


  function moveAt(e) {
    square.style.left = e.pageX - square.offsetWidth / 2 + 'px';
    square.style.top = e.pageY - square.offsetHeight / 2 + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  }

 
  square.onmouseup = function() {
    document.onmousemove = null;
    square.onmouseup = null;
  }
  
  ball.ondragstart = function() {
  return false;
};
  
}