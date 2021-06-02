const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });
  
  conn.setEncoding("utf8");
  
  conn.on("connect", (data) => {
    console.log("data---->", data)
    conn.write('Hello!!!!!')
  });
  
  return conn;
};



module.exports = { connect };