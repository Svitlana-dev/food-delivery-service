(() => {
  function toggleModal(modalId) {
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    if (modal) {
      modal.classList.toggle("is-open");
    } else {
      console.error(`Модальне вікно з ID ${modalId} не знайдено`);
    }
  }

  // Відкриття модальних вікон
  document.querySelectorAll("[data-modal-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal-open");
      toggleModal(modalId);
    });
  });

  // Закриття модальних вікон
  document.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal-close");
      toggleModal(modalId);
    });
  });

  // Закриття модального меню при натисканні на посилання
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      const modal = document.querySelector(".mobile-menu.is-open");
      if (modal) {
        modal.classList.remove("is-open");
      }
    });
  });
})();
