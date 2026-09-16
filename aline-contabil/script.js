const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menuToggle');
const links = Array.from(nav.querySelectorAll('a'));

menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
links.forEach((link) => link.addEventListener('click', () => nav.classList.remove('open')));

const sections = links
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry) => {
        links.forEach((link) =>
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)
        );
      });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);

sections.forEach((section) => observer.observe(section));
