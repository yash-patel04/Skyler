/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Modal.css";
import "../CSS/Words.css";
import { useEffect, useState } from "react";

const Words = ({ isOpen, onClose }) => {
  const [words, setWords] = useState([]);

  const main_id = "67ad6ad162dab0c252b370b6";
  const categories_id = "67ad71aafc8adc81127c4939";

  useEffect(() => {
    async function getWords() {
      try {
        const response = await fetch(
          `http://localhost:4000/api/auth/get/${main_id}/${categories_id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWords(data.words);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    }
    getWords();
  }, []);

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
            <div className="w-heading">Words</div>
            <div className="w-card-grid">
              {words.map((word) => {
                return (
                  <>
                    <div key={word._id}>
                      <button className="w-button" onClick={() => {}}>
                        <h4>{word.word}</h4>
                      </button>
                    </div>
                  </>
                );
              })}
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

export default Words;
