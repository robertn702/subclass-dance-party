var GrowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.$node.attr('class', 'grow');
  this.size = 10;
  this.max = Math.random()*150+50;
  this.$node.css({borderColor: this.getColor()});
};

GrowDancer.prototype = Object.create(Dancer.prototype);
GrowDancer.prototype.constructor = GrowDancer;
GrowDancer.prototype.step = function() {

  if (isNaN(this.size) || this.size <= this.max) {
    this.size *= 1.05;
  } else {
    this.size *= 0.90;
  }
  //this.$node.toggleClass('grow');
  // if (isNaN(this.size) || this.size <= 100){
    this.grow();
    Dancer.prototype.step.call(this);
  // }
};

GrowDancer.prototype.getColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

GrowDancer.prototype.grow = function() {
    var styleSettings = {
      borderWidth: this.size,
      borderRadius: this.size,
      // position: absolute,
      left: this.left - this.size/2,
      top: this.top - this.size/2,
      //borderColor: this.getColor()
    };
    this.$node.css(styleSettings);
};


