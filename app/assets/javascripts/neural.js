var DELTAS = [[-1,0], [-1,1], [0,1], [1,1], [1,0], [1,-1], [0,-1], [-1,-1]];
function Neural(options){
  this.delayCount = 0;
  this.thisX = options.thisX;
  this.thisY = options.thisY;
  this.ctx = options.context;
  this.neuronsArray = [];
  this.createNeurons();
};

Neural.prototype = {
  
  createNeurons: function(){
    var firstNeuron = new Neuron({x:this.thisX, y:this.thisY, level: 0});
    this.originNeuron = firstNeuron;
    //currentActionPotentialNode, use to propogate potential
    this.currentActionPotentialNode = firstNeuron;
    
    //create level one with 6 branches (selected at random)
    this.neuronsArray.push(new Neuron({parentNeuron: firstNeuron, level: 1, deltas: DELTAS[0]}));
    this.neuronsArray.push(new Neuron({parentNeuron: firstNeuron, level: 1, deltas: DELTAS[1]}));
    this.neuronsArray.push(new Neuron({parentNeuron: firstNeuron, level: 1, deltas: DELTAS[2]}));
    this.neuronsArray.push(new Neuron({parentNeuron: firstNeuron, level: 1, deltas: DELTAS[3]}));
    this.neuronsArray.push(new Neuron({parentNeuron: firstNeuron, level: 1, deltas: DELTAS[4]}));
    this.neuronsArray.push(new Neuron({parentNeuron: firstNeuron, level: 1, deltas: DELTAS[5]}));
    this.neuronsArray.push(new Neuron({parentNeuron: firstNeuron, level: 1, deltas: DELTAS[6]}));
    this.neuronsArray.push(new Neuron({parentNeuron: firstNeuron, level: 1, deltas: DELTAS[7]}));
    
    //iterate through array and draw each
    //go from 1 becuase origins children created manually above
    for(var i = 0; i < this.neuronsArray.length; i++){
      this.originNeuron.childNeurons.push(this.neuronsArray[i]);
      this.neuronsArray[i].createChildren();
    }
  },
  drawParentNeurons: function(){
    for(var i = 0; i < this.neuronsArray.length; i++){
      var tempNode = this.neuronsArray[i];
      this.drawNeuralHead(tempNode);
      this.drawChildren(tempNode);
      if(this.neuronsArray[i].parentNeuron){
        this.drawPathToParent(tempNode);
      }
    }
  },
  drawChildren: function(tempNode){
    if(tempNode.childNeurons.length == 0){
      return;
    }
    for(var i = 0; i < tempNode.childNeurons.length; i++){
      this.drawChildren(tempNode.childNeurons[i]);
      this.drawNeuralHead(tempNode);
      this.drawPathToParent(tempNode);
    }
  },
  drawPathToParent: function(tempNode, color, line){
    if(tempNode.parentNeuron){
      this.ctx.beginPath();
      this.ctx.moveTo(tempNode.x,tempNode.y);
      this.ctx.lineTo(tempNode.parentNeuron.x,tempNode.parentNeuron.y);
      this.ctx.strokeStyle = color || tempNode.color;
      this.ctx.lineWidth = line || 1;
      this.ctx.stroke();
    }
  },
  drawNeuralHead:function(node){
    
    
    //*****draw Neural Head with background neuron image*****
    // this.ctx.drawImage(NEURAL_BODY_IMAGE, node.x, node.y, 10, 10);
    
    //*****draw Neural Head with radial gradient*****
    
    // Radii of the white glow.
    // var innerRadius = 5,
//         outerRadius = 10,
//         // Radius of the entire circle.
//         radius = 8;
//
//     var gradient = this.ctx.createRadialGradient(node.x, node.y, innerRadius, node.x, node.y, outerRadius);
//     gradient.addColorStop(0, 'white');
//*****/     gradient.addColorStop(1, 'blue');
//
//     this.ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
//
//     this.ctx.fillStyle = "black";
//     this.ctx.fill();
    
    //*****draw Neural Head with simple circles*****
    this.ctx.beginPath();
    this.ctx.arc(node.x,node.y, node.radius, 0, Math.PI*2);
    this.ctx.closePath();
    this.ctx.fillStyle = NEURON_COLOR;
    this.ctx.fill();
  },
  propogateActionPotential: function(){
    this.currentActionPotentialNode.color = this.color;
  
    var nextChildIndex = Math.floor(Math.random() * this.currentActionPotentialNode.childNeurons.length);
    var nextChild = this.currentActionPotentialNode.childNeurons[nextChildIndex];

    nextChild.color = ACTION_POTENTIAL_COLOR;
  
    if(nextChild.childNeurons.length == 0){
      this.currentActionPotentialNode = this.originNeuron;
      this.delayCount = 0;
    } else {
      this.currentActionPotentialNode = nextChild;
    }  
    
  },
  
};







