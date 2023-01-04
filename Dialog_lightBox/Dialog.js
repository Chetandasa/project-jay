document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create the dialog
    const dialog = document.createElement("dialog");
    dialog.className = "lightbox";

    // Clone the image and put it in the dialog
    const imgClone = img.cloneNode();
    dialog.appendChild(imgClone);

    // Throw up the dialog
    document.body.appendChild(dialog);
    dialog.showModal();
    document.body.setAttribute("inert", true);

    // Click outside to close
    dialog.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        dialog.close();
      }
    });

    // Self-destruct on close
    dialog.addEventListener("close", (e) => {
      dialog.parentNode.removeChild(dialog);
      document.body.removeAttribute("inert");
    });
  });
});
