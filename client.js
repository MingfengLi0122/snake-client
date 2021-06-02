const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });
  
  conn.on("connect", () => {
    console.log("Name: MFL")
  })
  return conn;
};


module.exports = { connect };