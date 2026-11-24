/* Ai Talk policies — ShareChat-style mobile chrome */
(function () {
  function closeDrawer() {
    document.body.classList.remove("drawer-open");
    const toggle = document.querySelector("[data-drawer-toggle]");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  function openDrawer() {
    document.body.classList.add("drawer-open");
    const toggle = document.querySelector("[data-drawer-toggle]");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("[data-drawer-toggle]");
    const backdrop = document.querySelector("[data-drawer-backdrop]");
    const closeBtn = document.querySelector("[data-drawer-close]");

    if (toggle) {
      toggle.addEventListener("click", () => {
        if (document.body.classList.contains("drawer-open")) closeDrawer();
        else openDrawer();
      });
    }
    if (backdrop) backdrop.addEventListener("click", closeDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

    document.querySelectorAll(".mobile-drawer a").forEach((a) => {
      a.addEventListener("click", () => {
        if (a.getAttribute("href")?.startsWith("#")) closeDrawer();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeDrawer();
    });

    const tocBtn = document.querySelector("[data-toc-toggle]");
    const tocPanel = document.querySelector("[data-toc-panel]");
    if (tocBtn && tocPanel) {
      tocBtn.addEventListener("click", () => {
        const open = tocPanel.classList.toggle("open");
        tocBtn.classList.toggle("open", open);
        tocBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      tocPanel.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          tocPanel.classList.remove("open");
          tocBtn.classList.remove("open");
          tocBtn.setAttribute("aria-expanded", "false");
        });
      });
    }
  });
})();
