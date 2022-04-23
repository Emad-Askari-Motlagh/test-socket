import { Server } from "socket.io";

const handler = async (req, res) => {
  console.log(
    "/api/socketio",
    "- info:",
    "Received new request from frontend!"
  );

  if (res.socket.server.io) {
    console.log("/api/socketio", "- info:", "Socket is already running!");
  } 
  
  else {
    console.log("/api/socketio", "- info:", "Socket is initializing...");

    const httpServer = res.socket.server;
    const io = new Server(httpServer, {
      path: "/api/socketio",
    });
    console.log("/api/socketio", "- info:", "Socket server created");

    res.socket.server.io = io;
  }
  
  res.end();
};

export default handler;
