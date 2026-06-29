(function () {
  "use strict";

  var BACK_HREF = "../../index.html#publications";

  function cleanText(value) {
    return (value || "")
      .replace(/\s+/g, " ")
      .replace(/[\u0000-\u001f\u007f]/g, "")
      .trim();
  }

  function slugify(value, index) {
    var slug = cleanText(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    return slug || "publication-section-" + index;
  }

  function getPublicationTitle() {
    var body = document.body;
    if (body && body.dataset.publicationTitle) {
      return body.dataset.publicationTitle;
    }
    var titleEl = document.querySelector("title");
    return titleEl ? cleanText(titleEl.textContent) : "Publication";
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    var input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }

  function injectChrome(title) {
    var nav = document.createElement("nav");
    nav.className = "publication-nav";
    nav.setAttribute("aria-label", "Publication controls");
    nav.innerHTML =
      '<div class="publication-nav__inner">' +
      '<button type="button" id="publicationMenuButton" class="publication-hamburger" aria-label="Open outline" aria-controls="publicationSidebar" aria-expanded="false">' +
      '<span class="publication-hamburger__line" aria-hidden="true"></span>' +
      '<span class="publication-hamburger__line" aria-hidden="true"></span>' +
      '<span class="publication-hamburger__line" aria-hidden="true"></span>' +
      "</button>" +
      '<div class="publication-nav__title">' + escapeHtml(title) + "</div>" +
      '<div class="publication-nav__actions">' +
      '<a href="' + BACK_HREF + '" class="publication-btn publication-btn--back" aria-label="Back to site" title="Back to site">' +
      '<i class="flat-icon" data-lucide="arrow-left-to-line" aria-hidden="true"></i>' +
      "</a>" +
      '<button type="button" id="copyPublicationLink" class="publication-btn publication-btn--link" aria-label="Open link" title="Open link">' +
      '<i class="flat-icon" data-lucide="link" aria-hidden="true"></i>' +
      "</button>" +
      "</div>" +
      "</div>";

    var backdrop = document.createElement("div");
    backdrop.id = "publicationBackdrop";
    backdrop.className = "publication-backdrop";
    backdrop.setAttribute("aria-hidden", "true");

    var sidebar = document.createElement("aside");
    sidebar.id = "publicationSidebar";
    sidebar.className = "publication-sidebar";
    sidebar.setAttribute("aria-label", "Publication outline");
    sidebar.innerHTML =
      '<div class="publication-sidebar__header">' +
      '<strong class="publication-sidebar__title">Outline</strong>' +
      '<button type="button" id="closePublicationSidebar" class="publication-sidebar__close" aria-label="Close outline">' +
      '<i class="flat-icon" data-lucide="x" aria-hidden="true"></i>' +
      "</button>" +
      "</div>" +
      '<div id="publicationNavLinks" class="publication-sidebar__links"></div>';

    document.body.insertBefore(sidebar, document.body.firstChild);
    document.body.insertBefore(backdrop, document.body.firstChild);
    document.body.insertBefore(nav, document.body.firstChild);
  }

  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function wrapContent() {
    if (document.querySelector(".publication-content")) return;

    var main = document.createElement("main");
    main.className = "publication-content";

    var nodes = Array.from(document.body.childNodes);
    nodes.forEach(function (node) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        var el = node;
        if (
          el.classList.contains("publication-nav") ||
          el.classList.contains("publication-sidebar") ||
          el.classList.contains("publication-backdrop") ||
          el.tagName === "SCRIPT"
        ) {
          return;
        }
      }
      if (node.nodeType === Node.TEXT_NODE && !node.textContent.trim()) {
        return;
      }
      main.appendChild(node);
    });

    document.body.appendChild(main);
  }

  function buildOutline(contentRoot, navLinks, onNavigate) {
    var seen = new Set();
    var candidates = [];

    contentRoot.querySelectorAll("h1, h2, h3, h4, h5").forEach(function (node) {
      if (node.closest(".publication-nav, .publication-sidebar")) return;
      candidates.push({ node: node, level: Number(node.tagName.slice(1)) });
    });

    contentRoot.querySelectorAll("p").forEach(function (node) {
      if (node.closest(".publication-nav, .publication-sidebar")) return;
      if (node.querySelector("img")) return;
      if (!node.querySelector("b, strong")) return;
      var text = cleanText(node.textContent);
      if (text.length >= 6 && text.length <= 150) {
        candidates.push({ node: node, level: 3 });
      }
    });

    candidates.forEach(function (item, index) {
      var text = cleanText(item.node.textContent);
      var key = text.toLowerCase();
      if (!text || seen.has(key)) return;
      seen.add(key);
      if (!item.node.id) item.node.id = slugify(text, index);

      var link = document.createElement("a");
      link.href = "#" + item.node.id;
      link.textContent = text;
      link.className = "publication-sidebar__link";
      link.style.marginLeft = Math.min(Math.max(item.level - 1, 0), 4) * 0.65 + "rem";
      link.addEventListener("click", function () {
        if (typeof onNavigate === "function") onNavigate();
      });
      navLinks.appendChild(link);
    });

    if (!navLinks.children.length) {
      var empty = document.createElement("p");
      empty.className = "publication-sidebar__empty";
      empty.textContent = "No headings found.";
      navLinks.appendChild(empty);
    }
  }

  function initPublicationReader() {
    document.body.classList.add("publication-reader");

    var title = getPublicationTitle();
    injectChrome(title);
    wrapContent();

    var sidebar = document.getElementById("publicationSidebar");
    var backdrop = document.getElementById("publicationBackdrop");
    var menuButton = document.getElementById("publicationMenuButton");
    var closeButton = document.getElementById("closePublicationSidebar");
    var linkButton = document.getElementById("copyPublicationLink");
    var navLinks = document.getElementById("publicationNavLinks");
    var contentRoot = document.querySelector(".publication-content");

    if (!sidebar || !backdrop || !menuButton || !navLinks || !contentRoot) return;

    function openSidebar() {
      sidebar.classList.add("is-open");
      backdrop.classList.add("is-open");
      menuButton.setAttribute("aria-expanded", "true");
    }

    function closeSidebar() {
      sidebar.classList.remove("is-open");
      backdrop.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }

    buildOutline(contentRoot, navLinks, closeSidebar);

    menuButton.addEventListener("click", function () {
      if (sidebar.classList.contains("is-open")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    if (closeButton) closeButton.addEventListener("click", closeSidebar);
    backdrop.addEventListener("click", closeSidebar);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeSidebar();
    });

    if (linkButton) {
      linkButton.addEventListener("click", async function () {
        await copyText(window.location.href);
        linkButton.setAttribute("aria-label", "Copied link");
        linkButton.setAttribute("title", "Copied link");
        setTimeout(function () {
          linkButton.setAttribute("aria-label", "Open link");
          linkButton.setAttribute("title", "Open link");
        }, 1600);
      });
    }

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPublicationReader);
  } else {
    initPublicationReader();
  }
})();
