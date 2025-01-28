import React from 'react';
import Modal from 'react-modal';
import { X } from 'lucide-react'; // Assuming you're using lucide-react for the cross icon

// Modal accessibility setting
Modal.setAppElement('#root');

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Custom Modal"
      className="relative bg-white p-8 rounded-lg shadow-lg w-128 h-auto" // Increased size of modal
      overlayClassName="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center" // Reduced opacity for the background overlay
    >
      <div className="relative">
        {/* Close Icon */}
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
          aria-label="Close Modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </Modal>
  );
};

export default CustomModal;
