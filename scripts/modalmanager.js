/**
 * @module ModalManager
 * Handles modal open/close functionality
 */
const ModalManager = (() => {
  const modal = document.getElementById('show-modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = modal.querySelector('.close-btn');

  /**
   * Open modal with provided content
   * @param {HTMLElement} content
   */
  const openModal = (content) => {
    modalBody.innerHTML = '';
    modalBody.appendChild(content);
    modal.style.display = 'block';
  };

  const closeModal = () => {
    modal.style.display = 'none';
  };

  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  return { openModal, closeModal };
})();
