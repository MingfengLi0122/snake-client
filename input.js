let connection = {}
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection.write("Say: HELLO PEOPLE!!!")
  stdin.on("data", (handleUserInput) => {
    if (handleUserInput === '\u0003') {
      process.exit();
    } else if (handleUserInput === "w") {
      console.log("Move: up");
      connection.write("Move: up");
    } else if (handleUserInput === "a") {
      console.log("Move: left");
      connection.write("Move: left");
    } else if (handleUserInput === "s") {
      console.log("Move: down");
      connection.write("Move: down");
    } else if (handleUserInput === "d") {
      console.log("Move: right");
      connection.write("Move: right");
    } 
  });
  return connection;
};

module.exports = { setupInput };