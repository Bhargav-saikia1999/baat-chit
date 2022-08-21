import React, { useState } from "react";
import styles from "./RoomScreen.module.css";
import close from "../../assets/icons/close.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import SidePanel from "../../components/room/sidepanel/SidePanel";

const RoomScreen = () => {
  const [openSidePanel, setOpenSidePanel] = useState(true);

  return (
    <div className={styles.mainContainer}>
      <div data-aos="fade-right" className={styles.mainPanelContainer}>
        <img
          className={styles.sidePanelToggle}
          onClick={() => setOpenSidePanel(!openSidePanel)}
          src={openSidePanel ? close : hamburger}
          alt="spnl-icon"
        />
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
