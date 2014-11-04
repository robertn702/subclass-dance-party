var BreakDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;
BreakDancer.prototype.step = function() {
  this.$node.slideUp();
  Dancer.prototype.step.call(this);
};
