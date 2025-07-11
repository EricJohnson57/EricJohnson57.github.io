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
    







    // TODO 2 - Create Platforms
    createPlatform(500, 601, 100, 20,); 
    createPlatform(300, 501, 100, 20,);
    createPlatform(100, 401, 100, 20);
    createPlatform(300, 301, 100, 20);
    createPlatform(500, 301, 100, 20);
    createPlatform(700, 401, 100, 20);
    createPlatform(900, 401, 100, 20);
    createPlatform(1100, 301, 100, 20);
    createPlatform(1100, 500, 100, 20);
    createPlatform(1300, 200, 100, 20);
    createPlatform(1300, 600, 100, 20);
    createPlatform(700, 200, 100, 20);
    createPlatform(100, 200, 100, 20);

    // TODO 3 - Create Collectables
    createCollectable("max", 1350, 50);
    createCollectable("max", 500, 20); 
    createCollectable("max", 1334, 550); 
    createCollectable("max", 125, 150);
    createCollectable("max", 725, 350);

    
    // TODO 4 - Create Cannons
    createCannon("left", 50, 2000);
    createCannon("right", 400, 2000);
    createCannon("left", 500, 2000);
    createCannon("top", 800, 2000);
    createCannon("bottom", 1100, 2000);
    createCannon("right", 300, 2000);
    

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
