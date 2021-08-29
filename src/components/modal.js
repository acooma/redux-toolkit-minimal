import React from 'react';

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
    return (
      <div class="my-modal">
        <div class="OVERLAY_STYLES" />
        <div class="MODAL_STYLES d-flex flex-column">
          {children}
          <button type="button" class="btn btn-danger" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
}
