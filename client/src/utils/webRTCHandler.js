import * as wss from "./wss";
import store from "../redux/store";
import { setShowOverlay } from "../redux/actions";

const defaultConstraints = {
  audio: true,
  video: true,
};

let localStream;

export const getLocalPreviewAndInitRoomConnection = async (
  isRoomHost,
  identity,
  roomId = null
) => {
  //await fetchTURNCredentials();

  //const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

  navigator.mediaDevices
    .getUserMedia(defaultConstraints)
    .then((stream) => {
      console.log("successfuly received local stream");
      localStream = stream;
      showLocalVideoPreview(localStream);

      store.dispatch(setShowOverlay(false));

      isRoomHost ? wss.createNewRoom(identity) : wss.joinRoom(identity, roomId);
    })
    .catch((err) => {
      console.log(
        "error occurred when trying to get an access to local stream",
        err
      );
    });
};

const showLocalVideoPreview = (stream) => {
  //   const videosContainer = document.getElementById("videos_portal");
  //   videosContainer.classList.add("videos_portal_styles");
  //   const videoContainer = document.createElement("div");
  //   videoContainer.classList.add("video_track_container");
  //   const videoElement = document.createElement("video");
  //   videoElement.autoplay = true;
  //   videoElement.muted = true;
  //   videoElement.srcObject = stream;
  //   videoElement.onloadedmetadata = () => {
  //     videoElement.play();
  //   };
  //   videoContainer.appendChild(videoElement);
  //   //   if (store.getState().connectOnlyWithAudio) {
  //   //     videoContainer.appendChild(getAudioOnlyLabel());
  //   //   }
  //   videosContainer.appendChild(videoContainer);
};
