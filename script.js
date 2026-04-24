// Kiietsuu Portfolio — script
(() => {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      menu.hidden = !isOpen;
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    menu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        menu.classList.remove('is-open');
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // Rotating word in hero
  const rotator = document.querySelector('.rotator [data-word]');
  if (rotator) {
    const words = ['clean websites', 'fast interfaces', 'cozy apps', 'small tools', 'digital things'];
    let i = 0;
    let char = words[0].length;
    let deleting = true;

    const tick = () => {
      const word = words[i];
      if (deleting) {
        char--;
        rotator.textContent = word.slice(0, char);
        if (char <= 0) { deleting = false; i = (i + 1) % words.length; }
      } else {
        char++;
        rotator.textContent = words[i].slice(0, char);
        if (char >= words[i].length) {
          deleting = true;
          setTimeout(tick, 1600);
          return;
        }
      }
      setTimeout(tick, deleting ? 40 : 75);
    };
    setTimeout(tick, 1000);
  }

  // Scroll reveal
  const revealTargets = document.querySelectorAll(
    '.section__head, .about__card, .about__visual, .skill, .project, .contact, .hero__meta > div'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }
})();
