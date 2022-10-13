const socket = new WebSocket("ws://localhost:3001");

socket.addEventListener("open", () => {
  console.log("open");
  socket.send(
    JSON.stringify({
      data: "gdgd",
    })
  );
});

socket.addEventListener("message", ({ data }) => {
  const packet = JSON.parse(data);
  console.log(packet);
  console.log(packet.data);
});