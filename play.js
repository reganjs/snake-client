const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
   // host: "",
   // port: ,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", msg => {
    console.log("Connected!");
    console.log(`Connect message: ${msg}`);
  });

  conn.on("data", msg => {
    console.log(`Server message: ${msg}`);
  });

  // print msg sent by server
  conn.on("end", msg => {
    console.log("Ended!");
    console.log(`End message: ${msg}`);
  });

  return conn;
};

console.log("Connecting ...");
connect();
