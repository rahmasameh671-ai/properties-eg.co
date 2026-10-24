/**
 * PALM HILLS PORTFOLIO — BY PROPERTIES-EG.CO
 * Custom Client Engine: Country Code Dropdown (Zero Mojibake Vector SVG),
 * Form Handling, Zapier Webhook Lead Routing & Google Ads Conversion Tracking.
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountrySelector();
  initLeadCaptureForm();
});

/**
 * Split Country Code Selector with Pure Vector SVG Flags (Zero Mojibake)
 */
function initCountrySelector() {
  const trigger = document.getElementById('phCountryTrigger');
  const dropdown = document.getElementById('phCountryDropdown');
  const searchInput = document.getElementById('phCountrySearchInput');
  const listContainer = document.getElementById('phCountryList');
  const selectedFlag = document.getElementById('phSelectedFlag');
  const selectedDialCode = document.getElementById('phSelectedDialCode');
  const hiddenCodeInput = document.getElementById('phCountryCodeVal');
  const hiddenNameInput = document.getElementById('phCountryNameVal');

  if (!trigger || !dropdown || !listContainer) return;

  const countries = window.COUNTRY_CODES || [
    {
      code: 'EG',
      name: 'Egypt',
      dialCode: '+20',
      flagSvg: `<svg viewBox="0 0 24 16" width="24" height="16" class="flag-icon" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="5.33" fill="#C8102E"/>
        <rect y="5.33" width="24" height="5.34" fill="#FFFFFF"/>
        <rect y="10.67" width="24" height="5.33" fill="#000000"/>
        <path d="M11 6.5h2v3h-2z" fill="#888888"/>
        <circle cx="12" cy="7.5" r="0.8" fill="#555555"/>
      </svg>`
    }
  ];

  function renderList(items) {
    listContainer.innerHTML = '';
    if (items.length === 0) {
      const emptyLi = document.createElement('li');
      emptyLi.className = 'ph-country-option';
      emptyLi.style.color = '#94A3B8';
      emptyLi.textContent = 'No matching country';
      listContainer.appendChild(emptyLi);
      return;
    }

    items.forEach((c) => {
      const li = document.createElement('li');
      li.className = 'ph-country-option';
      li.setAttribute('role', 'option');
      li.setAttribute('data-code', c.code);
      li.setAttribute('data-dial', c.dialCode);
      li.setAttribute('data-name', c.name);

      li.innerHTML = `
        <span class="ph-option-flag">${c.flagSvg}</span>
        <span class="ph-option-name">${c.name}</span>
        <span class="ph-option-dial">${c.dialCode}</span>
      `;

      li.addEventListener('click', (e) => {
        e.stopPropagation();
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
      setTimeout(() => searchInput.focus(), 60);
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

  document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
      closeDropdown();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dropdown.classList.contains('active')) {
      closeDropdown();
      trigger.focus();
    }
  });

  // Default selection: Egypt (+20)
  renderList(countries);
  const defaultCountry = countries.find(c => c.code === 'EG') || countries[0];
  if (defaultCountry) {
    selectCountry(defaultCountry);
  }
}

/**
 * Lead Capture Form Processing with Zapier Webhook & Google Ads Conversion
 */
function initLeadCaptureForm() {
  const leadForm = document.getElementById('phLeadForm');
  const successState = document.getElementById('phLeadSuccess');
  const cardHeader = document.getElementById('phLeadHeader');
  const resetBtn = document.getElementById('phResetFormBtn');

  if (!leadForm) return;

  leadForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const fullNameInput = document.getElementById('phFullName');
    const phoneInput = document.getElementById('phPhone');
    const countryCodeVal = document.getElementById('phCountryCodeVal')?.value || '+20';
    const countryNameVal = document.getElementById('phCountryNameVal')?.value || 'Egypt';

    const fullName = fullNameInput ? fullNameInput.value.trim() : '';
    const phoneRaw = phoneInput ? phoneInput.value.trim().replace(/^0+/, '') : '';

    if (!fullName || !phoneRaw) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const fullPhone = `${countryCodeVal} ${phoneRaw}`;
    const submitBtn = leadForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Submitting...';
    submitBtn.disabled = true;

    const payload = {
      fullName: fullName,
      phoneNumber: fullPhone,
      countryCode: countryCodeVal,
      countryName: countryNameVal,
      rawPhone: phoneRaw,
      landingPageUrl: window.location.href,
      submissionDate: new Date().toISOString(),
      projectFocus: 'Palm Hills Developments Portfolio (Palm Hills New Cairo, 97 Hills, Village De La Capitale)',
      source: 'Palm Hills Landing Page (/palm-hills) - properties-eg.co',
      routedEmails: [
        'Rahma@irtkaz.com',
        'Mostafa.a.ashmawy@gmail.com',
        'Mostafa.ashmawy@irtkaz.com'
      ]
    };

    try {
      // Zapier Production Webhook
      await fetch("https://hooks.zapier.com/hooks/catch/25429357/uclzmpn/", {
        method: "POST",
        body: JSON.stringify(payload)
      });

      // Google Ads Conversion Event
      if (typeof gtag_report_conversion === 'function') {
        gtag_report_conversion();
      } else if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          'send_to': 'AW-660558623/UtZoCJbxlKgdEJ-m_boC',
          'value': 1.0,
          'currency': 'EGP'
        });
      }

      // Show Thank You success state
      if (successState) {
        successState.style.display = 'block';
        leadForm.style.display = 'none';
        if (cardHeader) cardHeader.style.display = 'none';
      }

      // LocalStorage Backup
      try {
        const stored = JSON.parse(localStorage.getItem('properties_eg_palmhills_leads') || '[]');
        stored.push(payload);
        localStorage.setItem('properties_eg_palmhills_leads', JSON.stringify(stored));
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      showToast(
        'Inquiry Transmitted',
        'Thank you. Your request for the Palm Hills portfolio has been delivered to our senior consultants.'
      );

      leadForm.reset();

    } catch (err) {
      console.error('Lead submission error:', err);
      alert('Unable to transmit your enquiry. Please chat directly with us on WhatsApp.');
    } finally {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });

  if (resetBtn && successState && leadForm) {
    resetBtn.addEventListener('click', () => {
      successState.style.display = 'none';
      leadForm.style.display = '';
      if (cardHeader) cardHeader.style.display = '';
    });
  }
}

/**
 * Toast Notification Helper
 */
function showToast(title, message) {
  const toast = document.getElementById('phToast');
  if (!toast) return;

  const titleEl = toast.querySelector('h4');
  const msgEl = toast.querySelector('p');

  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 6000);
}
