import React, { useState } from "react";
import styles from "./RoomScreen.module.css";
import SidePanel from "../../components/room/sidepanel/SidePanel";
import TitleBar from "../../components/room/title-bar/TitleBar";
import { useSelector } from "react-redux";
import InfoBar from "../../components/room/info-bar/InfoBar";

const RoomScreen = () => {
  const [openSidePanel, setOpenSidePanel] = useState(true);
  const { roomId } = useSelector((st) => st);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainPanelContainer}>
        <div data-aos="fade-down" className={styles.meetIdContainer}>
          <p className={styles.meetId}>
            Meet ID: <b>{roomId ? roomId : " null"}</b>
          </p>
        </div>
        <TitleBar
          openSidePanel={openSidePanel}
          setOpenSidePanel={setOpenSidePanel}
        />
        <InfoBar />
      </div>
      {openSidePanel && (
        <div data-aos="fade-right" className={styles.sidePanelContainer}>
          <SidePanel />
        </div>
      )}
    </div>
  );
};

export default RoomScreen;
