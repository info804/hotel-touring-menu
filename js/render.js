/**
 * render.js — Menu rendering engine
 * Features: sticky tabs, scroll-spy with tab centering, smooth animations
 */

/* -------------------------------------------------------
   renderMenu(data) — bar.html, ristorante.html, pizzeria.html
------------------------------------------------------- */
function renderMenu(data) {
  if (!data) return;

  const titleEl    = document.getElementById('page-title');
  const subtitleEl = document.getElementById('page-subtitle');
  if (titleEl)    titleEl.textContent = data.title;
  if (subtitleEl) subtitleEl.textContent = data.subtitle || '';

  const tabsEl    = document.getElementById('cat-tabs');
  const container = document.getElementById('menu-container');
  if (!container) return;

  // Build tabs + sections
  data.categories.forEach((cat, i) => {
    // --- TAB ---
    if (tabsEl) {
      const tab = document.createElement('a');
      tab.href      = '#cat-' + cat.id;
      tab.className = 'cat-tab' + (i === 0 ? ' active' : '');
      tab.textContent = cat.name.replace('PIZZE ', '').replace('BEVANDE ', '');
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('cat-' + cat.id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Center this tab in the scrollable bar
        centerTab(tab);
      });
      tabsEl.appendChild(tab);
    }

    // --- SECTION ---
    const section = document.createElement('div');
    section.className = 'cat-section';
    section.id        = 'cat-' + cat.id;

    let html = `
      <div class="cat-header">
        <span class="cat-name">${cat.name}</span>
        ${cat.note ? `<span class="cat-desc-small">${cat.note}</span>` : ''}
      </div>
    `;

    cat.items.forEach(item => {
      const tags = (item.tags || []).map(t => {
        const map = { veg: ['veg','Vegetariano'], gf: ['gf','Senza glutine'], hot: ['hot','Piccante'] };
        const [cls, label] = map[t] || ['veg', t];
        return `<span class="tag tag-${cls}">${label}</span>`;
      }).join('');

      html += `
        <div class="menu-item">
          <div class="item-info">
            <div class="item-name">${item.name}</div>
            ${item.desc ? `<div class="item-desc">${item.desc}</div>` : ''}
            ${tags ? `<div class="item-tags">${tags}</div>` : ''}
            ${item.allergens ? `<div class="item-allergens">Allergeni: ${item.allergens}</div>` : ''}
          </div>
          ${item.price ? `<div class="item-price">€ ${item.price}</div>` : '<div class="item-price"></div>'}
        </div>
      `;
    });

    section.innerHTML = html;
    container.appendChild(section);
  });

  // Staggered entrance animation
  animateSections();

  // Scroll-spy
  initScrollSpy();

  // Floating back button
  initFab();
}

/* -------------------------------------------------------
   renderWine(data) — vini.html
------------------------------------------------------- */
function renderWine(data) {
  if (!data) return;

  const titleEl    = document.getElementById('page-title');
  const subtitleEl = document.getElementById('page-subtitle');
  if (titleEl)    titleEl.textContent = data.title;
  if (subtitleEl) subtitleEl.textContent = data.subtitle || '';

  const tabsEl    = document.getElementById('cat-tabs');
  const container = document.getElementById('menu-container');
  if (!container) return;

  data.categories.forEach((cat, i) => {
    if (tabsEl) {
      const tab = document.createElement('a');
      tab.href      = '#cat-' + cat.id;
      tab.className = 'cat-tab' + (i === 0 ? ' active' : '');
      // Shorten tab labels for the tab bar
      tab.textContent = cat.name
        .replace('VINI ROSSI — ', '')
        .replace('VINI ', '')
        .replace('SPUMANTI & CHAMPAGNE', 'Spumanti')
        .replace('VINI DA DESSERT', 'Dessert');
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('cat-' + cat.id);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        centerTab(tab);
      });
      tabsEl.appendChild(tab);
    }

    const section = document.createElement('div');
    section.className = 'cat-section';
    section.id        = 'cat-' + cat.id;

    let html = `
      <div class="cat-header">
        <span class="cat-name">${cat.name}</span>
        ${cat.note ? `<span class="cat-desc-small">${cat.note}</span>` : ''}
      </div>
    `;

    cat.items.forEach(item => {
      html += `
        <div class="wine-item">
          <div class="wine-info">
            <div class="wine-name">${item.name}</div>
            ${item.producer ? `<div class="wine-producer">${item.producer}</div>` : ''}
            ${item.notes    ? `<div class="wine-notes">${item.notes}</div>` : ''}
          </div>
          <div class="wine-prices">
            ${item.bottle ? `<span class="wine-price-bottle">€ ${item.bottle}</span>` : ''}
            ${item.glass  ? `<span class="wine-price-glass">calice € ${item.glass}</span>` : ''}
          </div>
        </div>
      `;
    });

    section.innerHTML = html;
    container.appendChild(section);
  });

  animateSections();
  initScrollSpy();
  initFab();
}

/* -------------------------------------------------------
   renderSpeciali(data) — speciali.html
------------------------------------------------------- */
function renderSpeciali(data) {
  if (!data) return;

  const params    = new URLSearchParams(window.location.search);
  const activeKey = params.get('menu') || Object.keys(data)[0];
  const tabsEl    = document.getElementById('special-tabs');
  const container = document.getElementById('special-container');
  if (!tabsEl || !container) return;

  Object.keys(data).forEach(key => {
    const menu = data[key];

    // Tab button
    const btn = document.createElement('button');
    btn.className   = 'special-tab-btn' + (key === activeKey ? ' active' : '');
    btn.textContent = menu.tabLabel || menu.title;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.special-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.special-menu-block').forEach(b => {
        b.style.opacity = '0';
        b.style.transform = 'translateY(8px)';
        setTimeout(() => { b.classList.remove('active'); }, 150);
      });
      btn.classList.add('active');
      const block = document.getElementById('block-' + key);
      setTimeout(() => {
        block.classList.add('active');
        requestAnimationFrame(() => {
          block.style.opacity = '1';
          block.style.transform = 'translateY(0)';
        });
      }, 160);
      document.getElementById('page-title').textContent = menu.title;
      const url = new URL(window.location);
      url.searchParams.set('menu', key);
      window.history.replaceState({}, '', url);
    });
    tabsEl.appendChild(btn);

    // Content block
    const block = document.createElement('div');
    block.className = 'special-menu-block' + (key === activeKey ? ' active' : '');
    block.id        = 'block-' + key;
    block.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

    let html = '';
    if (menu.fixedPrice) {
      html += `
        <div class="special-price-banner">
          <div>
            <div class="special-price-label">Menù fisso a persona</div>
            ${menu.priceNote ? `<div class="special-price-note">${menu.priceNote}</div>` : ''}
          </div>
          <div class="special-price-amount">€ ${menu.fixedPrice}</div>
        </div>
      `;
    }

    (menu.courses || []).forEach(course => {
      html += `<div class="special-course">`;
      html += `<div class="special-course-title">${course.name}</div>`;
      (course.dishes || []).forEach(dish => {
        html += `
          <div class="special-dish">
            <div class="special-dish-name">${dish.name}</div>
            ${dish.desc ? `<div class="special-dish-desc">${dish.desc}</div>` : ''}
          </div>
        `;
      });
      html += `</div>`;
    });

    if (menu.includes) {
      html += `<div class="special-includes"><p>${menu.includes}</p></div>`;
    }

    block.innerHTML = html;
    container.appendChild(block);
  });

  if (data[activeKey]) {
    document.getElementById('page-title').textContent = data[activeKey].title;
  }

  // Animate in the visible block
  const activeBlock = document.querySelector('.special-menu-block.active');
  if (activeBlock) {
    activeBlock.style.opacity = '0';
    activeBlock.style.transform = 'translateY(12px)';
    requestAnimationFrame(() => {
      activeBlock.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      activeBlock.style.opacity = '1';
      activeBlock.style.transform = 'translateY(0)';
    });
  }
}

/* -------------------------------------------------------
   Scroll-spy: highlight tab matching the visible section
   and center it inside the scrollable tab bar
------------------------------------------------------- */
function initScrollSpy() {
  const tabsEl   = document.getElementById('cat-tabs');
  const sections = document.querySelectorAll('.cat-section');
  if (!tabsEl || !sections.length) return;

  // How tall the sticky tabs bar is (used for rootMargin)
  const TABS_H = tabsEl.offsetHeight + 16;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id  = entry.target.id;
      const tab = tabsEl.querySelector(`a[href="#${id}"]`);
      if (!tab) return;

      // Update active class
      tabsEl.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Smooth-scroll the tab into center of the tab bar
      centerTab(tab);
    });
  }, {
    rootMargin: `-${TABS_H}px 0px -55% 0px`,
    threshold: 0
  });

  sections.forEach(s => observer.observe(s));
}

/* -------------------------------------------------------
   initFab: floating "back to menu" button that appears
   when the user has scrolled past the sticky header
------------------------------------------------------- */
function initFab() {
  const fab = document.createElement('a');
  fab.href      = 'index.html';
  fab.className = 'fab-back';
  fab.setAttribute('aria-label', 'Torna al Menù');
  fab.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 4 L6 9 L11 14" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Menù
  `;
  document.body.appendChild(fab);

  // Page-exit animation on click
  fab.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector('main').style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    document.querySelector('main').style.opacity    = '0';
    document.querySelector('main').style.transform  = 'translateY(10px)';
    setTimeout(() => { window.location.href = href; }, 210);
  });

  // Show/hide based on scroll position
  const header = document.querySelector('.site-header');
  const threshold = header ? header.offsetHeight + 20 : 80;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > threshold) {
          fab.classList.add('visible');
        } else {
          fab.classList.remove('visible');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* -------------------------------------------------------
   centerTab: scroll a tab to center inside its container
------------------------------------------------------- */
function centerTab(tab) {
  const bar = tab.closest('.cat-tabs');
  if (!bar) return;
  const targetScroll = tab.offsetLeft - bar.offsetWidth / 2 + tab.offsetWidth / 2;
  bar.scrollTo({ left: targetScroll, behavior: 'smooth' });
}

/* -------------------------------------------------------
   animateSections: fade-in + slide-up each section
   on first paint (staggered)
------------------------------------------------------- */
function animateSections() {
  const sections = document.querySelectorAll('.cat-section');
  sections.forEach((section, i) => {
    section.style.opacity    = '0';
    section.style.transform  = 'translateY(18px)';
    section.style.transition = 'none';
  });

  // Double RAF: first frame sets initial state, second triggers transition
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      sections.forEach((section, i) => {
        section.style.transition = `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`;
        section.style.opacity    = '1';
        section.style.transform  = 'translateY(0)';
      });
    });
  });
}
