document.addEventListener('DOMContentLoaded', function () {

  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedElements.forEach(el => scrollObserver.observe(el));

  const quotes = document.querySelectorAll('.typewriter-quote');

  const typewriterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.innerText;
        el.innerText = '';
        let i = 0;

        function type() {
          if (i < text.length) {
            el.innerText += text.charAt(i);
            i++;
            setTimeout(type, 25);
          }
        }
        type();
        typewriterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  quotes.forEach(quote => typewriterObserver.observe(quote));

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');
      const formSuccess = document.getElementById('formSuccess');

      if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
      } else {
        nameError.style.display = 'none';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }

      if (messageInput.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
      } else {
        messageError.style.display = 'none';
      }

      if (isValid) {
        formSuccess.style.display = 'block';
        this.reset();
      } else {
        formSuccess.style.display = 'none';
      }
    });
  }
});