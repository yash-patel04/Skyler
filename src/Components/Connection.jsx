/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Connection.css";
import "../CSS/Modal.css";
// import { useState } from "react";

const Connection = ({ isOpen, onClose }) => {
  // const [connectionStatus, setConnectionStatus] = useState("disconnected");

  const connectionStatus = "connected";

  const renderStatus = () => {
    switch (connectionStatus) {
      case "disconnected":
        return (
          <div className="status-container disconnected">
            <p className="status-message">
              Disconnected. Please connect skyler.
            </p>
          </div>
        );
      case "loading":
        return (
          <div className="status-container loading">
            <p className="status-message">
              Connecting... Please wait a moment.
            </p>
          </div>
        );
      case "connected":
        return (
          <div className="status-container connected">
            <p className="status-message">Connected successfully!</p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="con-heading">Connection</div>
            {renderStatus()}

            <button className="close-button" onClick={onClose}>
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Connection;
