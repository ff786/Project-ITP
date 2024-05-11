import React from 'react';

const ConfirmModalPnD = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Code Created Successfully</h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModalPnD;
