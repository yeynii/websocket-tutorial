// const socket = new WebSocket("ws://localhost:3001");

// socket.addEventListener("open", () => {
//   console.log("open");
//   socket.send(
//     JSON.stringify({
//       data: "gdgd",
//     })
//   );
// });

// socket.addEventListener("message", ({ data }) => {
//   const packet = JSON.parse(data);
//   console.log(packet);
//   console.log(packet.data);
// });

//import { io } from "socket.io-client";

const { io } = require("socket.io-client");

const socket = io("ws://localhost:3001");
console.log(socket);

// send a message to the server
socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });

// receive a message from the server
socket.on("hello from server", (...args) => {
  console.log(args);
});
