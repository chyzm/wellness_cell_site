function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = document.getElementById('wellnessForm');
    const formData = new FormData(form);

    let message = "Wellness Cell Site Daily Report:\n\n";

    formData.forEach((value, key) => {
        message += `${key}: ${value}\n`;
    });

    const whatsappNumber = "2347031016787"; // Your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank'); // Open WhatsApp in a new tab
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