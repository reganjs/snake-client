const connect = require("./client");

// stdin 
// setupInput listens for keyboard input and reacts to it
const setupInput = function () {
const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

// handles data input from the user
const handleUserInput = function (key) {
  if (key === "\u0003") {
    console.log("Client manually terminated!");
    process.exit();
  }
};

// logs connecting
console.log("Connecting ...");

connect();
setupInput();
