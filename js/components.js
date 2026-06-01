/* =============================================
   LittleWoofs — Shared Components JS
   Injects nav, footer, and WhatsApp float
   into every page. Call buildPage() in each HTML.
   ============================================= */

const NAV_LINKS = [
  { href: 'index.html',       label: 'Home' },
  { href: 'about.html',       label: 'About' },
  { href: 'services.html',    label: 'Services' },
  { href: 'testimonials.html',label: 'Reviews' },
  { href: 'faq.html',         label: 'FAQ' },
  { href: 'gallery.html',     label: 'Gallery' },
  { href: 'contact.html',     label: 'Enquire Now', cls: 'nav-cta' },
];

function pawLogo() {
  return `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-label="LittleWoofs paw logo">
    <ellipse cx="20" cy="23" rx="12" ry="10" fill="#4A9B3C" opacity="0.18"/>
    <ellipse cx="20" cy="22" rx="10" ry="8.5" fill="#4A9B3C" opacity="0.3"/>
    <circle cx="20" cy="22" r="6.5" fill="#4A9B3C"/>
    <ellipse cx="11" cy="14.5" rx="3.2" ry="4.8" fill="#4A9B3C" transform="rotate(-18 11 14.5)"/>
    <ellipse cx="29" cy="14.5" rx="3.2" ry="4.8" fill="#4A9B3C" transform="rotate(18 29 14.5)"/>
    <ellipse cx="6.5" cy="21" rx="2.3" ry="3.3" fill="#4A9B3C" opacity="0.7" transform="rotate(-28 6.5 21)"/>
    <ellipse cx="33.5" cy="21" rx="2.3" ry="3.3" fill="#4A9B3C" opacity="0.7" transform="rotate(28 33.5 21)"/>
    <circle cx="17.5" cy="22" r="1.1" fill="white"/>
    <circle cx="22.5" cy="22" r="1.1" fill="white"/>
    <path d="M18 24.5 Q20 26.5 22 24.5" stroke="white" stroke-width="1.1" fill="none" stroke-linecap="round"/>
  </svg>`;
}

function buildNav(activePage) {
  const linksHtml = NAV_LINKS.map(l => {
    const isActive = l.href === activePage ? ' style="color:var(--grass-dark);background:var(--grass-light)"' : '';
    const cls = l.cls ? ` class="${l.cls}"` : '';
    return `<a href="${l.href}"${cls}${isActive}>${l.label}</a>`;
  }).join('');

  const mobileHtml = NAV_LINKS.map(l => {
    const cls = l.cls ? ` class="nav-cta"` : '';
    return `<a href="${l.href}"${cls}>${l.label}</a>`;
  }).join('');

  const nav = document.createElement('div');
  nav.innerHTML = `
    <nav class="site-nav" role="navigation" aria-label="Main navigation">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo" aria-label="LittleWoofs home">
          ${pawLogo()}
          <span class="nav-logo-text">Little<span class="logo-woof">Woofs</span></span>
        </a>
        <div class="nav-links">${linksHtml}</div>
        <button class="hamburger" aria-label="Open menu" aria-expanded="false" onclick="toggleMobile(this)">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" id="mobileMenu">${mobileHtml}</div>
    </nav>`;
  document.body.prepend(nav.firstElementChild);
}

function buildFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-logo-text">Little<span>Woofs</span> 🐾</div>
        <p>Welfare-first dog walking and care in Thamesmead, Barking &amp; Dagenham.<br>
        Small groups, gentle handling, and a dog walker who genuinely loves your dog.</p>
        <div style="margin-top:1rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
          <span class="badge badge-grass">MDWA Certified</span>
          <span class="badge badge-sky">Fully Insured</span>
        </div>
      </div>
      <div class="footer-col">
        <h5>Pages</h5>
        <a href="index.html">Home</a>
        <a href="about.html">About Andrea</a>
        <a href="services.html">Services &amp; Pricing</a>
        <a href="gallery.html">Gallery</a>
      </div>
      <div class="footer-col">
        <h5>Help</h5>
        <a href="faq.html">FAQ</a>
        <a href="testimonials.html">Client Reviews</a>
        <a href="contact.html">Contact / Enquire</a>
        <a href="onboarding.html">How It Works</a>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <a href="tel:+447810350376">📱 07810 350376</a>
        <a href="mailto:littlewoofs24@gmail.com">✉️ littlewoofs24@gmail.com</a>
        <a href="https://wa.me/447810350376" target="_blank">💬 WhatsApp</a>
        <a href="https://www.facebook.com/LittleWoofsThamesmead/" target="_blank">👍 Facebook</a>
      </div>
    </div>
    <div class="container">
      <div class="footer-bottom">
        <p>© 2026 LittleWoofs Dog Walking Services · Thamesmead, London · Company of Andrea Littlewood</p>
        <div class="footer-social">
          <a href="https://www.facebook.com/LittleWoofsThamesmead/" target="_blank" aria-label="Facebook">f</a>
          <a href="https://wa.me/447810350376" target="_blank" aria-label="WhatsApp">✓</a>
        </div>
      </div>
    </div>`;
  document.body.appendChild(footer);
}

function buildWhatsApp() {
  const link = document.createElement('a');
  link.href = 'https://wa.me/447810350376?text=Hi%20Andrea!%20I%27d%20love%20to%20find%20out%20more%20about%20LittleWoofs%20dog%20walking.';
  link.target = '_blank';
  link.className = 'wa-float';
  link.setAttribute('aria-label', 'Chat on WhatsApp');
  link.innerHTML = `<svg viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M5.04 23.444l.635-2.319A10.985 10.985 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11a10.963 10.963 0 0 1-5.251-1.337l-2.709.781z" stroke="white" stroke-width="0.5" fill="none"/></svg>`;
  document.body.appendChild(link);
}

function toggleMobile(btn) {
  const menu = document.getElementById('mobileMenu');
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
}

function buildPage(activePage) {
  buildNav(activePage);
  buildFooter();
  buildWhatsApp();
}
