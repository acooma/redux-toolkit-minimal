import React from 'react';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'white',
  padding: '50px',
  zIndex: 1000,
  color: 'black',
  transform: 'translate(-50%,-50%) scale(1)',
};

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 999,
  };

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return (
      <div class="">
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} class="d-flex flex-column">
        {children}
        <button type="button" class="btn btn-danger" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
