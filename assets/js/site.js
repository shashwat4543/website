(() => {
  const body = document.body;
  const root = body.dataset.root || "";
  const page = body.dataset.page || "";
  const navItems = [
    { href: `${root}index.html`, label: "Home", id: "home" },
    { href: `${root}about/`, label: "About", id: "about" },
    { href: `${root}cohorts/`, label: "Cohorts", id: "cohorts" },
    { href: `${root}outputs/`, label: "Outputs", id: "outputs" },
    { href: `${root}gallery/`, label: "Gallery", id: "gallery" },
    { href: `${root}partners/`, label: "Partners", id: "partners" }
  ];

  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (!header || !footer) return;

  const linksMarkup = navItems
    .map((item) => {
      const current = item.id === page ? ' aria-current="page"' : "";
      return `<li><a href="${item.href}"${current}>${item.label}</a></li>`;
    })
    .join("");

  header.className = "site-header";
  header.innerHTML = `
    <div class="container site-header-inner">
      <p class="brand"><a href="${root}index.html">Contributor Catalyst</a></p>
      <button class="menu-toggle" id="menu-toggle" aria-expanded="false" aria-controls="site-nav">
        Menu
      </button>
      <nav id="site-nav" class="site-nav" aria-label="Primary">
        <ul>${linksMarkup}</ul>
      </nav>
    </div>
  `;

  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="container site-footer-inner">
      <p>Contributor Catalyst Program</p>
      <p><a href="${root}about/">Accessibility + Contact placeholders</a></p>
    </div>
  `;

  const menuButton = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }
})();
