var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 800})
  .setPin("#pin1")
  // .addIndicators({name: "1 (duration: 800)"}) // add indicators (requires plugin)
  .addTo(controller);