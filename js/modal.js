(() => {
  function toggleModal(modalId) {
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    if (modal) {
      modal.classList.toggle("is-open");
    } else {
      console.error(`Модальне вікно з ID ${modalId} не знайдено`);
    }
  }

  document.querySelectorAll("[data-modal-open]").forEach(button => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal-open");
      toggleModal(modalId);
    });
  });

  document.querySelectorAll("[data-modal-close]").forEach(button => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal-close");
      toggleModal(modalId);
    });
  });
})();
