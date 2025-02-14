/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Connection.css";
import "../CSS/Modal.css";
import { useState } from "react";

const Connection = ({
  isOpen,
  onClose,
  onConnectionChange,
  connectionStatus,
}) => {
  const [loading, setLoading] = useState(false);

  const toggleConnection = async () => {
    if (loading) return;
    setLoading(true);

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          Math.random() > 0.2 ? resolve() : reject();
        }, 2000)
      );

      onConnectionChange(!connectionStatus); // Notify Button-2 about change
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

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
            <div className="con-heading">Connection Status</div>
            <div className="status-message">
              {loading
                ? "Please wait, processing..."
                : connectionStatus
                ? "Connected"
                : "Disconnected"}
            </div>
            <div className="group"></div>
            <button
              className={`con-btn ${
                loading
                  ? "loading"
                  : connectionStatus
                  ? "disconnected"
                  : "connected"
              }`}
              onClick={toggleConnection}
              disabled={loading}
            >
              {loading
                ? "Loading..."
                : connectionStatus
                ? "Disconnect"
                : "Connect"}
            </button>
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
