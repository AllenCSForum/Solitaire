var gameArea = {
    canvas : document.createElement("canvas"),
    //context : canvas.getContext("2d"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
	this.interval = setInterval(this.nextFrame, 20);
    },
    getMousePos: function(canvas, event){
        var rect = canvas.getBoundingClientRect();
        return {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        }
    },
    nextFrame : function(){
      gameArea.context.clearRect(0,0,gameArea.canvas.width,gameArea.canvas.height);
      clickableCube.update();
      cursorSquare.update();
      
      
    },
    mousePos : {
	x : 0,
	y: 0
    },
};
gameArea.canvas.addEventListener("mousemove", function(event){
    gameArea.mousePos = gameArea.getMousePos(gameArea.canvas, event);
    }
);
gameArea.canvas.addEventListener("click",function(event){
    if((gameArea.mousePos.x >= clickableCube.left && gameArea.mousePos.x <= clickableCube.left + clickableCube.width) && (gameArea.mousePos.y >= clickableCube.top && gameArea.mousePos.y <= clickableCube.top + clickableCube.height)){
        clickableCube.isClicked = clickableCube.isClicked ? false : true;
    }
    
});
var cursorSquare = {
    update : function(){
	  
	  gameArea.context.fillStyle = "red";
          gameArea.context.fillRect(gameArea.mousePos.x-5,gameArea.mousePos.y-5,10,10);
         document.getElementById("coords").innerHTML = "(" + gameArea.mousePos.x + "," + gameArea.mousePos.y + ")";
    },
    
    
};
var clickableCube = {
  isClicked: false,
  width: 200,
  height:70,
  top:20,
  left:50,
  update: function(){
    gameArea.context.fillStyle = this.isClicked ? "blue" : "green";
    gameArea.context.fillRect(this.left, this.top, this.width, this.height);
  },  
    
};
document.body.onload = gameArea.start();
