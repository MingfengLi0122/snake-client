const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("connect");
  });
  
  return conn;
};



module.exports = { connect };