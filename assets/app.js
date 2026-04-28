const CONTACT = {
  phone: "(11) 2915-8919",
  phoneHref: "tel:+551129158919",
  whatsapp: "(11) 99269-8278",
  whatsappNumber: "5511992698278",
  email: "contato@nilmariz.com.br",
  address: {
    street: "Rua Virginopolis, 169 - Sacoma",
    city: "Sao Paulo / SP",
    zip: "CEP 04249-020",
  },
};

function whatsappLink(message) {
  const defaultMessage = "Ola! Gostaria de solicitar uma cotacao de gerador.";
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message || defaultMessage)}`;
}

function icon(name) {
  const icons = {
    zap: `<svg class="icon" viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z"/></svg>`,
    menu: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
    x: `<svg class="icon" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
    phone: `<svg class="icon" viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9z"/></svg>`,
    message: `<svg class="icon" viewBox="0 0 24 24"><path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.1-5A8.5 8.5 0 1 1 21 11.5z"/></svg>`,
    whatsapp: `<svg class="icon-whatsapp" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.62 0 .35 5.27.35 11.75c0 2.07.54 4.08 1.56 5.85L0 24l6.58-1.86a11.7 11.7 0 0 0 5.52 1.4h.01c6.48 0 11.75-5.27 11.75-11.75 0-3.14-1.22-6.08-3.34-8.31zM12.1 21.55h-.01a9.7 9.7 0 0 1-4.96-1.36l-.35-.21-3.9 1.1 1.04-3.79-.23-.39a9.75 9.75 0 1 1 8.4 4.65z"/><path fill="currentColor" d="M17.63 14.47c-.3-.15-1.76-.87-2.03-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.37-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.12.3-.32.45-.49.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.51.07-.78.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.86 1.2 3.06.15.2 2.05 3.12 4.96 4.37.69.3 1.23.47 1.65.6.7.22 1.33.19 1.83.12.55-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35z"/></svg>`,
    mail: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/></svg>`,
    map: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 21s7-5.8 7-11a7 7 0 1 0-14 0c0 5.2 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>`,
    check: `<svg class="icon" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>`,
    arrow: `<svg class="icon" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></svg>`,
    clock: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>`,
    shield: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/></svg>`,
    factory: `<svg class="icon" viewBox="0 0 24 24"><path d="M3 21V10l7-4v4l7-4v15z"/><path d="M14 21v-5h4v5"/></svg>`,
    wrench: `<svg class="icon" viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.6-2.6z"/></svg>`,
    flame: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 2s4 3.3 4 7a4 4 0 0 1-8 0c0-2.8 2-5 4-7z"/><path d="M12 10c3 2 5 4.2 5 7a5 5 0 0 1-10 0c0-2.8 1.8-4.8 5-7z"/></svg>`,
    fuel: `<svg class="icon" viewBox="0 0 24 24"><path d="M6 3h9v18H6z"/><path d="M15 7h2l2 2v8a2 2 0 0 1-4 0v-3"/></svg>`,
    volume: `<svg class="icon" viewBox="0 0 24 24"><path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15 9a4 4 0 0 1 0 6"/><path d="M18 7a7 7 0 0 1 0 10"/></svg>`,
    gauge: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 14l4-4"/><path d="M5 19a9 9 0 1 1 14 0"/><path d="M12 17a1 1 0 1 0 0 2"/></svg>`,
    layers: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 16l9 5 9-5"/></svg>`,
    truck: `<svg class="icon" viewBox="0 0 24 24"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7.5" cy="18" r="1.5"/><circle cx="18.5" cy="18" r="1.5"/></svg>`,
    cpu: `<svg class="icon" viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/></svg>`,
    cog: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1z"/></svg>`,
  };
  return icons[name] || "";
}

const NAV = [
  { href: "index.html", label: "Inicio", page: "home" },
  { href: "sobre.html", label: "Sobre", page: "sobre" },
  { href: "geradores-gas.html", label: "Geradores a Gas", page: "gas" },
  { href: "geradores-diesel.html", label: "Geradores a Diesel", page: "diesel" },
  { href: "servicos.html", label: "Servicos", page: "servicos" },
  { href: "contato.html", label: "Contato", page: "contato" },
];

function renderHeader(currentPage) {
  const navDesktop = NAV.map((item) => `<a href="${item.href}" class="${item.page === currentPage ? "active" : ""}">${item.label}</a>`).join("");
  const navMobile = NAV.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");

  return `
    <div class="header-top">
      <div class="container">
        <div class="top-left">
          <a href="${CONTACT.phoneHref}" style="display:flex;align-items:center;gap:.4rem;">${icon("phone")} ${CONTACT.phone}</a>
          <div style="display:flex;align-items:center;gap:.45rem;">
            <span class="ping-wrap"></span> Plantao 24 horas
          </div>
        </div>
        <div class="top-right" style="opacity:.7;">Sao Paulo / SP</div>
      </div>
    </div>
    <header class="site-header">
      <div class="container bar">
        <a class="brand" href="index.html">
          <span class="logo-box">${icon("zap")}</span>
          <span><strong>Nilmariz</strong><small>Geradores</small></span>
        </a>
        <nav class="nav-links">${navDesktop}</nav>
        <div class="header-actions">
          <a class="btn btn-energy desktop-quote-btn" href="${whatsappLink()}" target="_blank" rel="noreferrer">Solicitar cotacao</a>
          <button class="mobile-toggle" type="button" id="mobile-toggle" aria-label="Abrir menu">${icon("menu")}</button>
        </div>
      </div>
      <div class="container mobile-nav" id="mobile-nav">
        ${navMobile}
        <a class="btn btn-energy" href="${whatsappLink()}" target="_blank" rel="noreferrer" style="margin-top:.5rem;width:100%;">Solicitar cotacao</a>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-main">
        <div>
          <div class="footer-brand">
            <span class="footer-logo">${icon("zap")}</span>
            <span><strong>Nilmariz</strong><small>GERADORES DE ENERGIA</small></span>
          </div>
          <p class="footer-intro">Energia para as coisas que movem sua vida. Mais de duas decadas em solucoes completas de geracao de energia para industria, comercio, hospitais, data centers e residencias de alto padrao.</p>
          <ul class="footer-contact">
            <li>${icon("phone")} <a href="${CONTACT.phoneHref}">${CONTACT.phone}</a></li>
            <li>${icon("whatsapp")} <a href="${whatsappLink()}" target="_blank" rel="noreferrer">WhatsApp ${CONTACT.whatsapp}</a></li>
            <li>${icon("mail")} <a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
            <li>${icon("map")} ${CONTACT.address.street} / ${CONTACT.address.city} - ${CONTACT.address.zip}</li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Produtos</div>
          <ul class="footer-links">
            <li><a href="geradores-gas.html">Geradores a Gas</a></li>
            <li><a href="geradores-diesel.html">Geradores a Diesel</a></li>
            <li><a href="servicos.html">Servicos e pecas</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-title">Empresa</div>
          <ul class="footer-links">
            <li><a href="sobre.html">Sobre nos</a></li>
            <li><a href="contato.html">Contato</a></li>
            <li><a href="${whatsappLink()}" target="_blank" rel="noreferrer">Plantao 24h</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>&copy; ${new Date().getFullYear()} Nilmariz Geradores. Todos os direitos reservados.</span>
        <span>Venda - Instalacao - Manutencao - Plantao 24h</span>
      </div>
    </footer>
  `;
}

function renderFab() {
  return `<a class="fab" href="${whatsappLink()}" target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp"><span class="fab-icon">${icon("whatsapp")}</span></a>`;
}

function enhanceWhatsappButtons() {
  const whatsappButtons = document.querySelectorAll('a.btn[href*="wa.me/"]:not(.fab)');
  whatsappButtons.forEach((button) => {
    if (button.querySelector(".icon-whatsapp")) return;
    button.insertAdjacentHTML("afterbegin", icon("whatsapp"));
  });
}

function mountLayout() {
  const page = document.body.getAttribute("data-page");
  const headerSlot = document.querySelector("[data-header]");
  const footerSlot = document.querySelector("[data-footer]");
  if (headerSlot) headerSlot.innerHTML = renderHeader(page);
  if (footerSlot) footerSlot.innerHTML = renderFooter();
  document.body.insertAdjacentHTML("beforeend", renderFab());
  enhanceWhatsappButtons();

  const toggle = document.getElementById("mobile-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      toggle.innerHTML = isOpen ? icon("x") : icon("menu");
    });
  }
}

document.addEventListener("DOMContentLoaded", mountLayout);
