/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Modal.css";
import "../CSS/Words.css";
import { useEffect, useState } from "react";

const Words = ({ isOpen, onClose }) => {
  const [words, setWords] = useState([]);

  const main_id = "67b57a3ff90dd332c137a945";
  const categories_id = "67b57c53163d503cf683951f";

  useEffect(() => {
    async function getWords() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}/get/${main_id}/${categories_id}`
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

  const handleWords = async (num) => {
    await fetch(`${import.meta.env.VITE_API}/mqtt/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: num,
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error));
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
            <div className="w-heading">Words</div>
            <div className="w-card-grid">
              {words.map((word) => {
                return (
                  <>
                    <div key={word._id}>
                      <button
                        className="w-button"
                        onClick={() => handleWords(word.clickEvent)}
                      >
                        <div className="w-title">{word.word}</div>
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
