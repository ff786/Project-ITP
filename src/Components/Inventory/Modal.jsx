import React from 'react';

const Modal = ({ isOpen, onClose, title, onSave, children }) => {
  if (!isOpen) return null;

  return (
    <div id="hs-slide-down-animation-modal" className="hs-overlay ...">
      <div className="...">
        <div className="...">
          <div className="...">
            <h3 className="...">{title}</h3>
            <button type="button" onClick={onClose} className="...">
              <span className="...">Close</span>
            </button>
          </div>
          <div className="...">
            {children}
          </div>
          <div className="...">
            <button type="button" onClick={onClose} className="...">Close</button>
            <button type="button" onClick={onSave} className="...">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
