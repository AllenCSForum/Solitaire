var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
    },
    mousePos: function(){
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        }
    },
    nextFrame : function(){
      this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
      cursorSquare.update();
        
    },
};

var cursorSquare = {
    update : function(){
          gameArea.conxtext.drawRect(gameArea.mousePos.x-5,gameArea.mousePos.y-5,gameArea.mousePos.x+5,gameArea.mousePos.y+5)
    },
    
    
};

document.body.onload = gameArea.start();
