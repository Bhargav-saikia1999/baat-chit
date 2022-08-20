import React, { useEffect, useState } from "react";
import styles from "./JoinRoomScreen.module.css";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsRoomHost } from "../../redux/actions";

const JoinRoomScreen = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { isRoomHost } = useSelector((st) => st);

  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [audioOnly, setAudioOnly] = useState(false);

  useEffect(() => {
    dispatch(setIsRoomHost(!!searchParams.get("host")));
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentPanel}>
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
              checked={audioOnly}
              onChange={(e) => setAudioOnly(e.target.checked)}
            />
            <label htmlFor="audioOnly">Join with audio only</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinRoomScreen;
