document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isOpen = content.style.display === "block";

    // Close all contents
    document
      .querySelectorAll(".accordion-content")
      .forEach((c) => (c.style.display = "none"));

    // Toggle the clicked one
    content.style.display = isOpen ? "none" : "block";
  });
});
