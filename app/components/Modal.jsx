import React from 'react';

export default function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null; // Don't render the modal if it's not visible

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Body section - renders the children (resource data) */}
        <div className="modal-body">
          {children}
        </div>

        {/* Footer with a close button */}
        <div className="modal-footer">
          <button onClick={onClose} className="btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
