var GrowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('class', 'grow');
  this.size = 10;
};

GrowDancer.prototype = Object.create(Dancer.prototype);
GrowDancer.prototype.constructor = GrowDancer;
GrowDancer.prototype.step = function() {
  this.size *= 1.05;
  this.grow();
  //this.$node.toggleClass('grow');
  Dancer.prototype.step.call(this);
};

GrowDancer.prototype.grow = function() {
    var styleSettings = {
      border: this.size,
      borderRadius: this.size
    };
    this.$node.css(styleSettings);
};
