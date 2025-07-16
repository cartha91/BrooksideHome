function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('show');
}

// Toggle Mobile Nav
function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('show');
}

// FAQ Accordion Toggle
document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const isOpen = answer.style.display === 'block';

      // Close all answers
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');

      // Open clicked one if it was closed
      if (!isOpen) {
        answer.style.display = 'block';
      }
    });
  });
});

// Lightbox Gallery
document.addEventListener('DOMContentLoaded', () => {
  const lightboxLinks = document.querySelectorAll('.lightbox');

  lightboxLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';

      const img = document.createElement('img');
      img.src = link.href;
      img.alt = link.querySelector('img').alt;

      overlay.appendChild(img);
      document.body.appendChild(overlay);

      overlay.addEventListener('click', () => {
        overlay.remove();
      });
    });
  });
});

// Contact Form Success Feedback
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', function () {
      setTimeout(() => {
        successMessage.style.display = 'block';
        form.reset();
      }, 500);
    });
  }
});
