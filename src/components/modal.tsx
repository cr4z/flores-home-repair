import React, { Dispatch, SetStateAction } from "react";

// import react-modal
import Modal from "react-modal";
Modal.setAppElement(":root");

import styles from "../../styles/PictureModal.module.css";

type Props = {
  showModal: boolean;
  modalImg: StaticImageData;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};
export default function PictureModal({ showModal, modalImg, setShowModal }: Props) {
  return (
    <Modal
      isOpen={showModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setShowModal(false)}
      style={{
        overlay: { zIndex: 1000, backgroundColor: "#0005", cursor: "pointer" },
        content: {
          border: "0",
          bottom: "auto",
          height: "auto",
          left: "50%",
          top: "50%", // start from center
          transform: "translate(-50%,-50%)", // adjust top "up" based on height
          width: "90%",
          maxWidth: "90vh",
        },
      }}
    >
      <div className={styles.modalImg} onClick={() => setShowModal(false)}>
        <img src={modalImg?.src} alt="example of our work" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a className="button" onClick={() => setShowModal(false)}>
          Close
        </a>
        <a className="button" target="_blank" rel="noopener noreferrer" href={modalImg?.src}>
          See full image &gt;
        </a>
      </div>
    </Modal>
  );
}
