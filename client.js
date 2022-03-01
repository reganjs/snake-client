const { IP, PORT, CLIENT_NAME } = require("./constants");
const net = require("net");

// establishes a connection with the game server and returns an object
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interprets incoming data as text
  conn.setEncoding("utf8");

  // event handler
  // logs Connected! when the connection is successfully established
  conn.on("connect", () => {
    console.log("Connected!");
    conn.write(`Name: ${CLIENT_NAME}`);
  });

  // handles events during idle state
  conn.on("data", msg => {
    console.log(`Server message: ${msg}`);
  });

  // logs Ended! when the connection ends
  conn.on("end", () => {
    console.log("Ended!");
  });

 // this 'conn' object gets returned and represents the client-server side connection
  return conn;
};

module.exports = connect;
