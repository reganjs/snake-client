const { connect } = require("./client");
const { setupInput } = require("./input");

// logs connecting
console.log("Connecting ...");
const conn = connect();

connect();
setupInput();
