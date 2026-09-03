document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();

  const socials = document.querySelectorAll('.socials a');
  socials.forEach((link) => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noreferrer');
  });

  const contactLinks = document.querySelectorAll('.links a, .contact-row a');
  contactLinks.forEach((link) => {
    if (link.getAttribute('href') === '#') {
      link.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }
  });

  const scrollRevealItems = document.querySelectorAll('.scroll-reveal');
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  scrollRevealItems.forEach((item) => revealObserver.observe(item));

  console.log(`Portfolio ready • ${year}`);
});
