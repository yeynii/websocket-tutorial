import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:4000",
  },
});

io.listen(3001);

io.on("connection", (socket) => {
  // receive a message from the client
  socket.on("hello from client", (...args) => {
    console.log(args);
    socket.emit("hello from server", ...args);
  });
});
