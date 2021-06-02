const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });
  
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("connceted !")
  });
  
  return conn;
};

// process.stdin.on("data", (message) => {
//   conn.write("message:", message);
// })

// conn.on("end", () => {
//   console.log("connect is end");
// })
// const server = net.createServer();
// server.on('connection', (client) => {
//   console.log('New client connected!');
//   client.write('Hello there!');
// });
// server.listen(port, () => {
//    console.log(`server is listeing on port = ${port}`);
// });



module.exports = { connect };