import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OromiyaModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div className="bg-white mx-auto my-auto p-4 rounded-lg shadow-md max-w-2xl">
            {children}
            <button onClick={closeModal}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default OromiyaModal;