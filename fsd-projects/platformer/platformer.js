$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();
    createPlatform(500, 610, 100, 20, "red"); 
    createPlatform(300, 510, 100, 20,)
    createPlatform(100, 410, 100, 20)
    createPlatform(300, 310, 100, 20)
    createPlatform(500, 310, 100, 20)
    createPlatform(700, 410, 100, 20)
    createPlatform(900, 410, 100, 20)
    createPlatform(1100, 310, 100, 20)
    createPlatform(1100, 510, 100, 20)
    createPlatform(1300, 210, 100, 20)
    createPlatform(1300, 610, 100, 20)
    // TODO 2 - Create Platforms




    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
