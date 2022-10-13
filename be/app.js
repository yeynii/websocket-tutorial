import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:4000",
  },
});

io.listen(3001);



//https://socket.io/docs/v3/broadcasting-events/
io.on("connection", (socket) => {
  // receive a message from the client
  socket.on("hello from client", (...args) => {
    console.log(args);
    //sender socket을 제외한 나머지 클라이언트에게 broadcast
    //socket.broadcast.emit("hello from server", ...args);
    
    //해당 소켓에 연결된 모든 클라이언트에게
    io.emit("hello from server", ...args);
  });
});
