var BACKGROUND = "#003340";
var NEURON_COLOR = "#009BBF";
var ACTION_POTENTIAL_COLOR = "#00CAFF"

function NeuralNetwork(options){
  this.ctx = options.context;
  this.neurals = [];
  WINDOW_WIDTH = options.width;
  WINDOW_HEIGHT = options.height;
  this.createNeurals();
  this.tick();
};

NeuralNetwork.prototype = {
  clearScreen: function(){
    this.ctx.beginPath();
    this.ctx.rect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    this.ctx.fillStyle = BACKGROUND;
    this.ctx.fill();
  },
  createNeurals: function(){
    //4 origins from where action potentials start
    var thisX = WINDOW_WIDTH/3;
    var thisY = WINDOW_HEIGHT/3;
    
    //quadrant 1
    this.neurals.push(new Neural({thisX: thisX, thisY: thisY, context: this.ctx, color: this.color}));
    //quadrant 2
    // this.neurals.push(new Neural({thisX: thisX*2, thisY: thisY, context: this.ctx, color: this.color}));
//     //quadrant 3
//     this.neurals.push(new Neural({thisX: thisX, thisY: thisY*2, context: this.ctx, color: this.color}));
//     //quadrant 4
//     this.neurals.push(new Neural({thisX: thisX*2, thisY: thisY*2, context: this.ctx, color: this.color}));
  },
  tick: function(){
    var that = this;
    this.tickInterval = setInterval(function(){
      that.clearScreen();
      for(var i = 0; i < that.neurals.length; i++){
        that.neurals[i].delayCount += 1;
        that.neurals[i].drawParentNeurons();
        
        if(that.neurals[i].delayCount > 50){
          that.neurals[i].propogateActionPotential();
        }
      }
    }, 20)
  }
};

