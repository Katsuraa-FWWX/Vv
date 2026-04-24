// Kiietsuu Portfolio — script (Full-Stack Edition)
(() => {
  // -------- Year in footer --------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // -------- Mobile menu toggle --------
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle('is-open', open);
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
    };
    toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) setOpen(false);
    });
  }

  // -------- Scroll reveal --------
  const revealTargets = document.querySelectorAll(
    '.section__head, .about__text, .about__facts, .service, .stack__group, .timeline__item, .project, .testimonial, .contact, .hero__content > *, .hero__aside, .marquee'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // Stagger siblings slightly for a nicer cascade
            const parent = e.target.parentElement;
            if (parent && parent.children.length > 1) {
              const index = Array.from(parent.children).indexOf(e.target);
              e.target.style.transitionDelay = `${Math.min(index * 60, 300)}ms`;
            }
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  // -------- Contact form (client-side only demo) --------
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      if (!name || !email || !message) {
        status.textContent = 'Mohon lengkapi nama, email, dan pesan.';
        status.className = 'form-status is-err';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = 'Format email belum valid.';
        status.className = 'form-status is-err';
        return;
      }

      // Fallback: buka email client user. Ganti dengan Formspree / endpoint backend kalau siap.
      const topic = (data.get('topic') || 'Pertanyaan umum').toString();
      const subject = encodeURIComponent(`[Portfolio] ${topic} — ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:hello@kiietsuu.dev?subject=${subject}&body=${body}`;

      status.textContent = 'Membuka email client… Kalau tidak terbuka, langsung kirim ke hello@kiietsuu.dev.';
      status.className = 'form-status is-ok';
      form.reset();
    });
  }

  // -------- Active nav highlight on scroll --------
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const setActive = (id) => {
      navLinks.forEach((a) => {
        const isActive = a.getAttribute('href') === `#${id}`;
        a.style.color = isActive ? 'var(--text)' : '';
      });
    };
    const io2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => io2.observe(s));
  }
})();
