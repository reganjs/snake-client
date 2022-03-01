let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) { 
  connection = conn;

const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

// handles user input - exits system with ctrl + c
const handleUserInput = function (key) {
  if (key === "\u0003") {
// logs Thanks for playing, come back soon! when the player exits the game
    console.log("Thanks for playing, come back soon!");
    process.exit();
  }

//moves the snake character left, right, up or down dependant on the key you press using a, w, s or d
  if (key === "w") connection.write("Move: up");
  if (key === "a") connection.write("Move: left");
  if (key === "s") connection.write("Move: down");
  if (key === "d") connection.write("Move: right");
//moves the snake character left, right, up or down dependant on the key you press using the left, right, up and down arrow keys
  if (key === "38") connection.write("Move: up");
  if (key === "37") connection.write("Move: left");
  if (key === "40") connection.write("Move: down");
  if (key === "39") connection.write("Move: right");
//logs various text chat dependant on which character you input
  if (key === "g") connection.write("Say: Hello! I am a snake");
  if (key === "t") connection.write("Say: I'm enjoying playing snake instead of coding");
  if (key === "q") connection.write("Say: My ultimate is charging! Wait... what ultimate? THIS IS SNAKE!");
  if (key === "f") connection.write("Say: Use POWERUP: GROWTH!");
};

module.exports = setupInput;
