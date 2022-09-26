import io from "socket.io-client";
import store from "../redux/store";
import { setParticipants, setRoomId, setSocketId } from "../redux/actions";

const SERVER = "http://localhost:5002";

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io(SERVER);

  socket.on("connect", () => {
    console.log("successfully connected with socket io server");
    console.log(socket.id);
    //store.dispatch(setSocketId(socket.id));
  });

  socket.on("room-id", ({ roomId }) => {
    store.dispatch(setRoomId(roomId));
  });

  socket.on("room-update", ({ connectedUsers }) => {
    store.dispatch(setParticipants(connectedUsers));
  });
};

export const createNewRoom = (identity, onlyAudio = false) => {
  // emit an event to server that we would like to create new room
  const data = {
    identity,
    //onlyAudio,
  };

  socket.emit("create-new-room", data);
};

export const joinRoom = (identity, roomId, onlyAudio = false) => {
  //emit an event to server that we would to join a room
  const data = {
    roomId,
    identity,
    //onlyAudio,
  };

  socket.emit("join-room", data);
};
