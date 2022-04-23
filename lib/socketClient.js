import io from "socket.io-client"

let socket = io.connect(process.env.BASE_URL, {
  path: "/api/socketio",
});

export default socket;
