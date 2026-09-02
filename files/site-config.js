/* ==========================================================
   SITE-WIDE BRANDING CONFIG
   ----------------------------------------------------------
   Single source of truth for the lab's abbreviation, full name,
   institution, and contact email. Included by every page via:
     <script src="files/site-config.js"></script>
   placed in <head>, before that page's own scripts run. Change a
   value here and it updates everywhere on the site: nav brand,
   page titles, meta descriptions, header overline, footer, the
   hero intro line, and every mailto link that references the lab.

   Each page still builds its own document.title / meta description
   (since the wording differs per page — e.g. "Publications — ..."
   vs the homepage title) but does so entirely from these fields,
   so no page has the lab's abbreviation / full name / the contact
   email typed out anywhere in its own markup or script.
   ========================================================== */
const SITE = {
  ABBR: "LDIS",
  NAME: "Lab of Data & AI-Intensive Systems",
  SCHOOL: "School of Computing",
  INSTITUTION: "KAIST",
  CONTACT_EMAIL: "kymkim@kaist.ac.kr",
  YEAR: "2026",
};

/* Fills every element on the page marked with a data-site attribute.
   Call this once, from a script placed after the elements below exist
   in the DOM (the bottom of <body> is fine — that's where every page
   on this site already keeps its scripts). Safe to call on any page:
   elements that don't exist are simply skipped. */
function applySiteBrand() {
  document.querySelectorAll('[data-site="brand-abbr"]').forEach(el => el.textContent = SITE.ABBR);
  document.querySelectorAll('[data-site="brand-tagline"]').forEach(el => el.textContent = `${SITE.NAME} · ${SITE.INSTITUTION}`);
  document.querySelectorAll('[data-site="overline"]').forEach(el => el.textContent = `${SITE.SCHOOL}, ${SITE.INSTITUTION}`);
  document.querySelectorAll('[data-site="hero-lab-name"]').forEach(el => el.textContent = `${SITE.ABBR} (${SITE.NAME})`);
  document.querySelectorAll('[data-site="footer-abbr"]').forEach(el => el.textContent = SITE.ABBR);
  document.querySelectorAll('[data-site="footer-tagline"]').forEach(el => el.textContent = `${SITE.NAME} · ${SITE.SCHOOL}, ${SITE.INSTITUTION}`);
  document.querySelectorAll('[data-site="footer-copyright"]').forEach(el => el.textContent = `© ${SITE.YEAR} ${SITE.ABBR}`);
  document.querySelectorAll('[data-site="site-year"]').forEach(el => el.textContent = SITE.YEAR);
  document.querySelectorAll('[data-site="join-email"]').forEach(el =>
    el.setAttribute("href", `mailto:${SITE.CONTACT_EMAIL}?subject=[${SITE.ABBR}] Prospective student`));
  document.querySelectorAll('[data-site="collab-email"]').forEach(el =>
    el.setAttribute("href", `mailto:${SITE.CONTACT_EMAIL}?subject=[${SITE.ABBR}] Collaboration inquiry`));
}
