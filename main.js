function sendToWhatsApp(event) {
  event.preventDefault();

  const form = document.getElementById('wellnessForm');
  const formData = new FormData(form);

  let message = "Wellness Cell Site Daily Report:\n\n";

  // Get all the labels from the form
  const labels = {};
  form.querySelectorAll('label').forEach(label => {
      if (label.htmlFor) { // Check if label has htmlFor attribute
          const inputElement = document.getElementById(label.htmlFor);
          if (inputElement) { // Check if element is found
              const inputName = inputElement.getAttribute('name');
              if (inputName) {
                  labels[inputName] = label.textContent;
              }
          }
      }
  });

  formData.forEach((value, key) => {
      const question = labels[key] || key;
      message += `${question}: *${value}*\n\n`;
  });

  const whatsappNumber = "2349069446743";
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');
}

function toggleContactOptions() {
    const contactOptions = document.getElementById('contactOptions');
    contactOptions.classList.toggle('active');
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Add smooth scrolling behavior
    });
}


// Back to Top Functionality
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.addEventListener('scroll', function () {
    const btn = document.getElementById('backToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });
  
  // Toggle Contact Modal (WhatsApp & Call)
  function toggleContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
  }
  // Close contact modal if clicking outside
  window.addEventListener('click', function(e) {
    const modal = document.getElementById('contactModal');
    const btn = document.querySelector('.contact-btn');
    if (!modal.contains(e.target) && e.target !== btn) {
      modal.style.display = 'none';
    }
  });
  
  // Toggle Mobile Navigation Menu
  function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  }