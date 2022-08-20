import React, { useEffect, useState } from "react";
import styles from "./JoinRoomScreen.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsRoomHost, setConnectOnlyWithAudio } from "../../redux/actions";

const JoinRoomScreen = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isRoomHost, connectOnlyWithAudio } = useSelector((st) => st);

  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    dispatch(setIsRoomHost(!!searchParams.get("host")));
  }, []);

  const handleAudioOnly = (e) => {
    dispatch(setConnectOnlyWithAudio(e.target.checked));
  };

  return (
    <div className={styles.mainContainer}>
      <div
        data-aos="fade-down"
        data-aos-duration="400"
        className={styles.contentPanel}
      >
        <h1 className={styles.title}>{isRoomHost ? `Host` : `Join`} meeting</h1>
        <div className={styles.inputsContainer}>
          <input
            className={styles.textField}
            value={name}
            placeholder="Enter your name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          {!isRoomHost && (
            <input
              className={styles.textField}
              value={roomId}
              placeholder="Enter the meeting id"
              type="text"
              onChange={(e) => setRoomId(e.target.value)}
            />
          )}
          <div className={styles.audioOnlyCheck}>
            <input
              type="checkbox"
              name="audioOnly"
              checked={connectOnlyWithAudio}
              onChange={(e) => handleAudioOnly(e)}
            />
            <label htmlFor="audioOnly">Join with audio only</label>
          </div>
        </div>
        <div className={styles.errMsgContainer}>
          {errorMsg !== "" && <p className={styles.errMsg}>{errorMsg}</p>}
        </div>
        <div className={styles.btnsContainer}>
          <button
            onClick={() => {
              console.log("Joining....");
            }}
            className={styles.joinBtn}
          >
            Join
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            className={styles.cancelBtn}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinRoomScreen;
