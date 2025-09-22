// Main site-wide JavaScript for interactivity
// - Mobile navigation toggle
// - Active link highlighting
// - Smooth scrolling for same-page anchors
// - Theme toggle (light/dark) persisted in localStorage
// - Basic contact form validation

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // 1) Enhance/prepare navbar
    const navbar = document.querySelector('.navbar');
    const navList = navbar ? navbar.querySelector('ul') : null;

    if (navbar && navList) {
      // Add menu toggle button if not present
      let toggleBtn = navbar.querySelector('.menu-toggle');
      if (!toggleBtn) {
        toggleBtn = document.createElement('button');
        toggleBtn.className = 'menu-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle navigation');
        toggleBtn.innerHTML = '<span></span><span></span><span></span>';
        navbar.insertBefore(toggleBtn, navList);
      }

      toggleBtn.addEventListener('click', function () {
        navList.classList.toggle('open');
        toggleBtn.classList.toggle('open');
      });

      // Close menu on link click (mobile UX)
      navList.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          navList.classList.remove('open');
          toggleBtn.classList.remove('open');
        });
      });

      // 2) Active link highlighting based on pathname
      const current = location.pathname.split('/').pop().toLowerCase() || 'index.html';
      navList.querySelectorAll('a').forEach(function (a) {
        const href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
        if (href === current) {
          a.classList.add('active');
        }
      });
    }

    // 3) Smooth scroll for same-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // 4) Theme toggle button
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      root.classList.add('dark');
    }

    let themeBtn = document.querySelector('.theme-toggle');
    if (!themeBtn) {
      themeBtn = document.createElement('button');
      themeBtn.className = 'theme-toggle';
      themeBtn.type = 'button';
      themeBtn.title = 'Toggle theme';
      themeBtn.textContent = root.classList.contains('dark') ? '☀️' : '🌙';
      // Prefer to append inside the navbar's list so it's top-right with nav links
      if (navbar && navList) {
        const li = document.createElement('li');
        li.className = 'nav-theme-toggle';
        li.appendChild(themeBtn);
        navList.appendChild(li);
      } else {
        // Fallback: append to body
        document.body.appendChild(themeBtn);
      }
    }

    themeBtn.addEventListener('click', function () {
      root.classList.toggle('dark');
      const isDark = root.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      themeBtn.textContent = isDark ? '☀️' : '🌙';
    });

    // 5) Basic contact form validation on Form.html
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function (e) {
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const details = form.querySelector('#project_details');

        let valid = true;
        const errors = [];

        if (name && !name.value.trim()) {
          valid = false;
          errors.push('Please enter your full name.');
        }

        if (email) {
          const emailVal = email.value.trim();
          const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
          if (!emailVal || !emailOk) {
            valid = false;
            errors.push('Please enter a valid email address.');
          }
        }

        if (details && details.value.trim().length < 10) {
          valid = false;
          errors.push('Please provide a short description of your project (at least 10 characters).');
        }

        if (!valid) {
          e.preventDefault();
          alert(errors.join('\n'));
        } else {
          // In a static site, we can simulate a successful submit
          // You could plug in Formspree or Netlify Forms later
          e.preventDefault();
          alert('Thanks! Your message has been sent. I will get back to you shortly.');
          form.reset();
        }
      });
    }
  });
})();
