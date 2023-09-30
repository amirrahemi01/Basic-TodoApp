import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faSquareXmark } from "@fortawesome/free-solid-svg-icons";

function OpenModal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="Modal-Container">
      <div className="Modal-Inner">
        <FontAwesomeIcon
          onClick={onClose}
          icon={faSquareXmark}
          className="close-btn"
          size="xl"
        />
        {children}
      </div>
    </div>
  );
}

export default OpenModal;
