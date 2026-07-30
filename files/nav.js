/* ==========================================================
   MOBILE NAV TOGGLE
   ----------------------------------------------------------
   Below ~820px (see theme-swiss.css) the nav links no longer fit next
   to the brand, so they're hidden behind the hamburger button
   (#nav-toggle) and shown as a dropdown (#nav-links.open) instead.
   Shared by every page via:
     <script src="files/nav.js"></script>
   placed at the bottom of <body>, after the <nav> markup above it.
   Safe to include on any page — if the toggle/links elements aren't
   found (they always should be), it just does nothing.
   ========================================================== */
(function () {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;

  function setOpen(open) {
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "✕" : "☰"; // ✕ / ☰
  }

  toggle.addEventListener("click", () => setOpen(!links.classList.contains("open")));

  // Tapping a link closes the dropdown (matters most for same-page
  // anchors like #research / #join, which don't trigger a navigation).
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setOpen(false)));
})();
