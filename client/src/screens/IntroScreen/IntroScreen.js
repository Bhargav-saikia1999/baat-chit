import React from "react";
import { useNavigate } from "react-router-dom";
import ConnectingBtn from "../../components/buttons/ConnectingBtn";
import styles from "./IntroScreen.module.css";

const IntroScreen = () => {
  const navigate = useNavigate();

  const joinMeetHandler = () => {
    navigate("/join-room", { replace: false });
  };
  const hostMeetHandler = () => {
    navigate("/join-room?host=true", { replace: false });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentPanel}>
        <h1 className={styles.logo}>Baat Chit</h1>
        <div className={styles.btnsContainer}>
          <ConnectingBtn
            btnText="Join a meeting"
            clickHandler={joinMeetHandler}
            btnClassName={styles.joinMeetBtn}
          />
          <ConnectingBtn
            isCreateRoom={true}
            btnText="Host a meeting"
            clickHandler={hostMeetHandler}
            btnClassName={styles.hostMeetBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
