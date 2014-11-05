$(document).ready(function(){
  window.dancers = [];


  $(".moveDancerButton").on("click", function(event) {
    for(var i = 0; i< dancers.length; i++){
      //dancers[i].$node.addClass("left");
      var rand = Math.random()*1000;+'%';
      var rand2 = Math.random()*900;+'%';
      dancers[i].$node.animate({
        "left": rand,
        "top": rand2
      },5000)
    }
  });

  $(".findPairButton").on("click", function(event) {
    for(var i = 0; i< dancers.length; i++){
      var firstDancer;
      var closestDancer;
      if (dancer.constructor.name === 'BreakDancer') {

      }
      //dancers[i].$node.addClass("left");
      var rand = Math.random()*1000;+'%';
      var rand2 = Math.random()*900;+'%';
      dancers[i].$node.animate({
        "left": rand,
        "top": rand2
      },5000)
    }
  });

  // $(document).on('mouseenter', ".breakDancer", function(){
  //   console.log(this);
  //   $(this).hide();
  // });

  // $(".BreakDancer, .grow").on('click', function(event){
  //   console.log(this);
  //   console.log('check');
  // });

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});

