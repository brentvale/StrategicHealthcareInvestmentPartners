var React = require('react');

var CanvasNeurons = React.createClass({
  componentDidMount: function(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    var canvas = document.getElementById('neurons');
    canvas.width = windowWidth;
    canvas.height = windowHeight;

    var c = canvas.getContext('2d');

    new NeuralNetwork({context:c, width:windowWidth, height:windowHeight});
  }, 
  render: function(){
    return(
      <canvas id="neurons" className="fixed-position"></canvas>
    )
  }
});

module.exports = {
  CanvasNeurons: CanvasNeurons
}