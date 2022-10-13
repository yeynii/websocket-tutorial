const { WebSocketServer } = require("ws");

const server = new WebSocketServer({ port: 3001 });

console.log("server established");

server.on("connection", (socket) => {
  console.log("connected");
  socket.on("message", (data) => {
    const packet = JSON.parse(data);
    console.log(packet);
    socket.send(
      JSON.stringify({
        data: packet.data + "!!",
      })
    );
  });
});
