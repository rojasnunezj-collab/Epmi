/**
 * EPMI S.A.C. - Main JavaScript Controller
 * High-performance, lightweight Vanilla JS for 2026 UI standards
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar iconos de Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Control del Menú Móvil
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Cerrar automáticamente al hacer clic en un enlace de navegación
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 3. Estilo dinámico del Navbar al hacer scroll (Sólido y limpio)
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-md');
    } else {
      navbar.classList.remove('shadow-md');
    }
  });

  // 4. Animación de Contadores Numéricos (Stat Counters)
  const counters = document.querySelectorAll('.counter');
  let countersTriggered = false;

  const runCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const speed = target > 50 ? 25 : 80;

      const updateCount = () => {
        const increment = Math.ceil(target / 20);
        if (count < target) {
          count += increment;
          if (count > target) count = target;
          counter.innerText = `+${count}`;
          setTimeout(updateCount, speed);
        } else {
          counter.innerText = `+${target}`;
        }
      };
      updateCount();
    });
  };

  const heroSection = document.getElementById('hero');
  if (heroSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersTriggered) {
          countersTriggered = true;
          runCounters();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(heroSection);
  }

  // 5. Scroll Reveal Effect (IntersectionObserver)
  const revealElements = document.querySelectorAll('#servicios .grid > div, #sectores .grid > div, #por-que-epmi .space-y-4 > div');
  revealElements.forEach(el => el.classList.add('reveal-on-scroll'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => revealObserver.observe(el));

  // 6. Manejo Asíncrono del Formulario de Cotización B2B (Formspree AJAX)
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const formFeedback = document.getElementById('form-feedback');
  const emailInput = document.getElementById('email');
  const replyToField = document.getElementById('hidden_replyto');

  if (contactForm) {
    // Sincronizar replyto
    if (emailInput && replyToField) {
      emailInput.addEventListener('input', () => {
        replyToField.value = emailInput.value;
      });
    }

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Validación simple
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      // Estado de carga en el botón
      submitBtn.disabled = true;
      const originalText = btnText.innerText;
      btnText.innerText = 'Enviando solicitud...';
      submitBtn.classList.add('opacity-80', 'cursor-not-allowed');

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Éxito
          formFeedback.className = 'p-4 rounded-xl text-xs font-semibold text-center bg-emerald-50 text-emerald-800 border border-emerald-200 block';
          formFeedback.innerHTML = `
            <div class="flex items-center justify-center gap-2 mb-1">
              <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span>¡Solicitud enviada con éxito!</span>
            </div>
            <p class="font-normal text-slate-600">Nuestro equipo comercial y técnico de EPMI se contactará en breve con su empresa.</p>
          `;
          contactForm.reset();
        } else {
          // Error en el servidor Formspree
          const data = await response.json().catch(() => ({}));
          throw new Error(data.error || 'Error al procesar el envío.');
        }
      } catch (error) {
        // Fallback amigable
        formFeedback.className = 'p-4 rounded-xl text-xs font-semibold text-center bg-amber-50 text-amber-900 border border-amber-200 block';
        formFeedback.innerHTML = `
          <p class="mb-1">Estimado cliente, tuvimos un inconveniente al enviar por la web.</p>
          <p class="font-normal">Por favor contáctenos directamente al <a href="https://wa.me/51998257562" class="underline font-bold text-brand-700">WhatsApp +51 998 257 562</a> o al correo <a href="mailto:comercial@epmi.com.pe" class="underline font-bold text-brand-700">comercial@epmi.com.pe</a>.</p>
        `;
      } finally {
        submitBtn.disabled = false;
        btnText.innerText = originalText;
        submitBtn.classList.remove('opacity-80', 'cursor-not-allowed');
        
        // Re-render iconos si se añadieron al feedback
        if (window.lucide) {
          window.lucide.createIcons();
        }
      }
    });
  }
});
