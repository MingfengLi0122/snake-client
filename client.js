const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });
  
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Hi server!")
  })
  return conn;
};


module.exports = connect;