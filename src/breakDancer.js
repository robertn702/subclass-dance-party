var BreakDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('class', 'absolute');
  this.$node.append('<div class="breakDancer"></div>');
};

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;
BreakDancer.prototype.step = function() {
  //this.$node.slideUp();
  Dancer.prototype.step.call(this);
};
