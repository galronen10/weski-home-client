// src/socket.ts
import { io, Socket } from "socket.io-client";

const SERVER_URL = import.meta.env.VITE_WS_URL;

const socket: Socket = io(SERVER_URL, {
  transports: ["websocket"],
});

export default socket;
