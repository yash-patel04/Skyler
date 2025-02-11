/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Error.css";
import "../CSS/Modal.css";

const Error = ({ isOpen, onClose }) => {
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
            <div className="e-heading">Error</div>
            <div className="error-message">
              An error occurred. Please try again.
            </div>
            <div>
              <button className="close-button" onClick={onClose}>
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Error;
