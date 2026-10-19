/**
 * properties-eg.co - Corporate Engine
 * Authorized Real Estate Brokerage & Strategic Partner
 * 10 Years of Real Estate Excellence
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountrySelector();
  initLeadForm();
  initSmoothScroll();
});

/**
 * Initializes the custom split Country Code dropdown with zero mojibake and pure vector SVG flags
 */
function initCountrySelector() {
  const trigger = document.getElementById('country-trigger');
  const dropdown = document.getElementById('country-dropdown');
  const searchInput = document.getElementById('country-search-input');
  const listContainer = document.getElementById('country-list');
  const selectedFlag = document.getElementById('selected-flag');
  const selectedDialCode = document.getElementById('selected-dial-code');
  const hiddenCodeInput = document.getElementById('country_code_val');
  const hiddenNameInput = document.getElementById('country_name_val');

  if (!trigger || !dropdown || !listContainer) return;

  const countries = window.COUNTRY_CODES || [];

  // Populate Country List
  function renderList(items) {
    listContainer.innerHTML = '';
    if (items.length === 0) {
      const emptyLi = document.createElement('li');
      emptyLi.className = 'country-empty-state';
      emptyLi.textContent = 'No matching country found';
      listContainer.appendChild(emptyLi);
      return;
    }

    items.forEach((c) => {
      const li = document.createElement('li');
      li.className = 'country-option';
      li.setAttribute('role', 'option');
      li.setAttribute('data-code', c.code);
      li.setAttribute('data-dial', c.dialCode);
      li.setAttribute('data-name', c.name);

      li.innerHTML = `
        <span class="option-flag">${c.flagSvg}</span>
        <span class="option-name">${c.name}</span>
        <span class="option-dial">${c.dialCode}</span>
      `;

      li.addEventListener('click', () => {
        selectCountry(c);
        closeDropdown();
      });

      listContainer.appendChild(li);
    });
  }

  function selectCountry(country) {
    if (selectedFlag) selectedFlag.innerHTML = country.flagSvg;
    if (selectedDialCode) selectedDialCode.textContent = country.dialCode;
    if (hiddenCodeInput) hiddenCodeInput.value = country.dialCode;
    if (hiddenNameInput) hiddenNameInput.value = country.name;
    trigger.setAttribute('aria-label', `Selected ${country.name} (${country.dialCode})`);
  }

  function openDropdown() {
    dropdown.classList.add('active');
    trigger.setAttribute('aria-expanded', 'true');
    if (searchInput) {
      searchInput.value = '';
      renderList(countries);
      setTimeout(() => searchInput.focus(), 50);
    }
  }

  function closeDropdown() {
    dropdown.classList.remove('active');
    trigger.setAttribute('aria-expanded', 'false');
  }

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dropdown.classList.contains('active')) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  // Search filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = countries.filter(
        c => c.name.toLowerCase().includes(query) || c.dialCode.includes(query) || c.code.toLowerCase().includes(query)
      );
      renderList(filtered);
    });

    searchInput.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  // Click outside listener
  document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
      closeDropdown();
    }
  });

  // Keyboard navigation escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dropdown.classList.contains('active')) {
      closeDropdown();
      trigger.focus();
    }
  });

  // Initial render & default selection (Egypt +20)
  renderList(countries);
  const defaultCountry = countries.find(c => c.code === 'EG') || countries[0];
  if (defaultCountry) {
    selectCountry(defaultCountry);
  }
}

/**
 * Lead Capture Form Processing with Confirmation Modal
 */
function initLeadForm() {
  const form = document.getElementById('lead-form');
  const modal = document.getElementById('success-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalContactWhatsapp = document.getElementById('modal-whatsapp-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('full-name');
    const phoneInput = document.getElementById('phone-number');
    const dialCode = document.getElementById('country_code_val')?.value || '+20';
    const countryName = document.getElementById('country_name_val')?.value || 'Egypt';
    const submitBtn = form.querySelector('.form-submit-btn');

    const fullName = nameInput ? nameInput.value.trim() : '';
    const rawPhone = phoneInput ? phoneInput.value.trim() : '';

    if (!fullName) {
      alert('Please enter your full name.');
      if (nameInput) nameInput.focus();
      return;
    }

    if (!rawPhone || rawPhone.length < 5) {
      alert('Please enter a valid phone number.');
      if (phoneInput) phoneInput.focus();
      return;
    }

    const fullPhoneNumber = `${dialCode} ${rawPhone}`;

    // Visual loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'TRANSMITTING...';
    }

    // Lead payload
    const lead = {
      fullName,
      countryCode: dialCode,
      countryName,
      phoneNumber: rawPhone,
      fullPhone: fullPhoneNumber,
      source: 'properties-eg.co Landing Page',
      timestamp: new Date().toISOString()
    };

    // Store lead locally
    try {
      const existing = JSON.parse(localStorage.getItem('properties_eg_leads') || '[]');
      existing.push(lead);
      localStorage.setItem('properties_eg_leads', JSON.stringify(existing));
    } catch (err) {
      console.warn('Storage warning:', err);
    }

    // WhatsApp Direct Action
    const waMessage = encodeURIComponent(
      `Hello properties-eg.co,\n\nI have submitted my interest on your platform:\n• Name: ${fullName}\n• Phone: ${fullPhoneNumber}\n\nI would like to speak to an investment advisor regarding premier opportunities.`
    );
    const waLink = `https://wa.me/201033373331?text=${waMessage}`;

    if (modalContactWhatsapp) {
      modalContactWhatsapp.href = waLink;
    }

    // Emulate swift corporate response
    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'SUBMIT';
      }

      form.reset();

      // Show confirmation modal
      if (modal) {
        const leadNameTarget = document.getElementById('modal-lead-name');
        if (leadNameTarget) leadNameTarget.textContent = fullName;
        modal.classList.add('active');
        document.body.classList.add('modal-open');
      } else {
        alert(`Thank you, ${fullName}. An authorized advisor from properties-eg.co will contact you shortly.`);
      }
    }, 600);
  });

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    });
  }
}

/**
 * Smooth scrolling helper
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
