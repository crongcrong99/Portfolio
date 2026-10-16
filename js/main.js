(function () {
  "use strict";

  var LANGS = ["en", "ko", "zh"];
  var DEFAULT_LANG = "en";
  var STORAGE_KEY = "portfolio-lang";
  var HTML_LANG = { en: "en", ko: "ko", zh: "zh-CN" };
  var ACCENTS = ["teal", "violet", "yellow", "pink", "purple", "gray"];

  var C = window.CONTENT || {};
  var lang = DEFAULT_LANG;

  /* ---------- helpers ---------- */
  function tr(value) {
    if (value == null) return "";
    if (typeof value === "string" || typeof value === "number") return String(value);
    return value[lang] != null ? value[lang] : (value.en != null ? value.en : "");
  }

  function ui(path) {
    var node = (window.I18N || {})[lang];
    var parts = path.split(".");
    for (var i = 0; i < parts.length && node; i++) node = node[parts[i]];
    if (node == null && lang !== "en") {
      node = window.I18N.en;
      for (var j = 0; j < parts.length && node; j++) node = node[parts[j]];
    }
    return node == null ? "" : node;
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function bind(name) { return document.querySelector('[data-bind="' + name + '"]'); }

  function setText(name, text) { var n = bind(name); if (n) n.textContent = text; }

  function setBg(node, src) {
    if (!node) return;
    if (src) {
      node.style.backgroundImage = 'url("' + src + '")';
      node.classList.add("has-image");
    } else {
      node.style.backgroundImage = "";
      node.classList.remove("has-image");
    }
  }

  function imageOrPlaceholder(src, accent) {
    var box = el("div", "thumb thumb--" + accent);
    if (src) {
      var img = el("img");
      img.src = src;
      img.alt = "";
      img.loading = "lazy";
      box.appendChild(img);
    } else {
      box.appendChild(el("span", "thumb-hint", ui("misc.addImage")));
    }
    return box;
  }

  /* ---------- render ---------- */
  function renderStatic() {
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      n.textContent = ui(n.getAttribute("data-i18n"));
    });
  }

  function renderHero() {
    var p = C.profile || {};
    var h = C.hero || {};

    setText("brand", p.initials || "");
    setText("name", tr(p.name));
    setText("role", tr(p.role));
    setText("emailText", p.email || "");
    var email = bind("email");
    if (email) email.href = p.email ? "mailto:" + p.email : "#contact";

    var photo = bind("photo");
    setBg(photo, p.photo);
    if (photo) photo.textContent = p.photo ? "" : (p.initials || "");

    setText("badgeText", ui("hero.badge") + " • " + (p.year || "") + " • ");

    var f = h.featured || {};
    setBg(bind("featuredImage"), f.image);
    setText("featuredCaption", tr(f.caption));
    if (bind("featured")) bind("featured").href = f.link || "#works";

    var stats = h.stats || [];
    [0, 1].forEach(function (i) {
      var s = stats[i] || {};
      setText("stat" + i + "Value", s.value || "");
      setText("stat" + i + "Label", tr(s.label));
    });

    var hl = h.highlight || {};
    setText("highlightValue", hl.value || "");
    setText("highlightLabel", tr(hl.label));
  }

  function renderAbout() {
    var a = C.about || {};

    var intro = bind("intro");
    intro.innerHTML = "";
    (a.intro || []).forEach(function (para) { intro.appendChild(el("p", null, tr(para))); });

    var details = bind("details");
    details.innerHTML = "";
    (a.details || []).forEach(function (d) {
      var row = el("div", "detail-row");
      row.appendChild(el("dt", null, tr(d.label)));
      row.appendChild(el("dd", null, tr(d.value)));
      details.appendChild(row);
    });

    var skills = bind("skills");
    skills.innerHTML = "";
    (a.skills || []).forEach(function (s) { skills.appendChild(el("li", null, tr(s))); });
  }

  function renderProjects() {
    var list = bind("projects");
    list.innerHTML = "";
    var items = C.projects || [];
    if (!items.length) { list.appendChild(el("p", "empty", ui("misc.empty"))); return; }

    items.forEach(function (p, i) {
      var accent = ACCENTS[i % ACCENTS.length];
      var card = el("article", "project-card");
      card.appendChild(imageOrPlaceholder(p.image, accent));

      var body = el("div", "project-body");
      var meta = el("div", "project-meta");
      meta.appendChild(el("span", "project-index", String(i + 1).padStart(2, "0")));
      if (p.period) meta.appendChild(el("span", null, tr(p.period)));
      if (p.role) meta.appendChild(el("span", null, tr(p.role)));
      body.appendChild(meta);
      body.appendChild(el("h3", null, tr(p.title)));
      body.appendChild(el("p", null, tr(p.description)));

      if (p.tags && p.tags.length) {
        var tags = el("ul", "tags tags--small");
        p.tags.forEach(function (t) { tags.appendChild(el("li", null, tr(t))); });
        body.appendChild(tags);
      }
      if (p.link) {
        var a = el("a", "project-link", ui("misc.viewProject") + " ↗");
        a.href = p.link;
        a.target = "_blank";
        a.rel = "noopener";
        body.appendChild(a);
      }
      card.appendChild(body);
      card.appendChild(el("i", "corner"));
      list.appendChild(card);
    });
  }

  function renderWorks() {
    var grid = bind("works");
    grid.innerHTML = "";
    var items = C.works || [];
    if (!items.length) { grid.appendChild(el("p", "empty", ui("misc.empty"))); return; }

    items.forEach(function (w, i) {
      var accent = ACCENTS[i % ACCENTS.length];
      var card = el(w.link ? "a" : "article", "work-card");
      if (w.link) { card.href = w.link; card.target = "_blank"; card.rel = "noopener"; }
      card.appendChild(imageOrPlaceholder(w.image, accent));

      var info = el("div", "work-info");
      info.appendChild(el("h3", null, tr(w.title)));
      var meta = [tr(w.category), tr(w.year)].filter(Boolean).join(" · ");
      info.appendChild(el("span", null, meta));
      card.appendChild(info);
      card.appendChild(el("i", "corner corner--light"));
      grid.appendChild(card);
    });
  }

  function renderContact() {
    var p = C.profile || {};
    var mail = bind("contactEmail");
    mail.textContent = p.email || "";
    mail.href = p.email ? "mailto:" + p.email : "#";

    var links = bind("links");
    links.innerHTML = "";
    (C.links || []).forEach(function (l) {
      var li = el("li");
      var a = el("a", null, tr(l.label));
      if (l.url) { a.href = l.url; a.target = "_blank"; a.rel = "noopener"; }
      else a.classList.add("is-empty");
      li.appendChild(a);
      links.appendChild(li);
    });

    setText("footer", "© " + (p.year || new Date().getFullYear()) + " " + tr(p.name));
  }

  function render() {
    document.documentElement.lang = HTML_LANG[lang] || lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.title = tr((C.profile || {}).name) + " — " + ui("hero.title");

    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      var active = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });

    renderStatic();
    renderHero();
    renderAbout();
    renderProjects();
    renderWorks();
    renderContact();
  }

  /* ---------- language ---------- */
  function setLang(next) {
    if (LANGS.indexOf(next) === -1) next = DEFAULT_LANG;
    lang = next;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
    render();
  }

  function initialLang() {
    var fromUrl = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(fromUrl) !== -1) return fromUrl;
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) { /* storage unavailable */ }
    return DEFAULT_LANG;
  }

  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  /* ---------- active nav link on scroll ---------- */
  function initScrollSpy() {
    if (!("IntersectionObserver" in window)) return;
    var links = document.querySelectorAll(".sidenav a");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { observer.observe(s); });
  }

  lang = initialLang();
  render();
  initScrollSpy();
})();
