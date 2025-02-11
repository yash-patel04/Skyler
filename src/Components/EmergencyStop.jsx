/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/EmergencyStop.css";
import "../CSS/Modal.css";

const EmergencyStop = ({ isOpen, onClose }) => {
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
            <div className="es-heading">Emergency Stop</div>
            <button
              className="stop-button"
              onClick={() => {
                alert("Stopped");
              }}
            >
              {" "}
              Stop{" "}
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

export default EmergencyStop;
