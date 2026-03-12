
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navAnchors = navLinks.querySelectorAll('a');
    const revealElements = document.querySelectorAll('.reveal');

    function updateHeader() {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    navAnchors.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.08}s`;
      observer.observe(el);
    });

    window.addEventListener('scroll', updateHeader);
    updateHeader();

    // document.querySelector('form').addEventListener('submit', function (e) {
    //   e.preventDefault();
    //   alert('Mensagem enviada com sucesso. Personalize este envio para integrar com e-mail, WhatsApp ou backend.');
    //   this.reset();
    // });

    /* EMAILJS */
    (function () { emailjs.init("MypcVvtDFzJP0BKSd"); })();
    document.getElementById("contact-form").addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm("service_5pge4rt", "template_19rhrf8", this)
        .then(() => alert("Mensagem enviada!"),
          () => alert("Erro ao enviar."));
    });