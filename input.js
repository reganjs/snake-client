// setup interface to handle user input from stdin
const setupInput = function () {
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
    console.log("User exited the terminal manually!");
    process.exit();
  }
};

module.exports = setupInput;
