import React from "react";
import Modal from "./PopupcomAirdropper/ModalStart";

export default function App({ onClose }) {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div className="app9_contain2 fl-right">
        <div className="contain3_section clear">
          <div className="app9_contain3_section_middle_done air_drop_mar_9">
            <button>Add Address</button>
          </div>
          <div className="airapp8_contain3_section_middle_done">
            <button onClick={() => setShow(true)}>Start Airdrop</button>
          </div>
        </div>
      </div>
      <Modal show={show} onClose={() => setShow(false)}></Modal>
    </>
  );
}
