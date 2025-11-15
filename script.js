// Simple contact form alert simulation
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting BrandBanao.co! We will reach out shortly.');
  e.target.reset();
});
