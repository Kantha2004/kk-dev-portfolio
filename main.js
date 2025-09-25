(function(){
  const data = window.PORTFOLIO_DATA || {};

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  function setText(id, value){
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }

  function createEl(tag, opts = {}){
    const el = document.createElement(tag);
    if (opts.className) el.className = opts.className;
    if (opts.text) el.textContent = opts.text;
    if (opts.html) el.innerHTML = opts.html;
    if (opts.attrs) Object.entries(opts.attrs).forEach(([k,v]) => el.setAttribute(k, v));
    return el;
  }

  function renderHeader(){
    setText('devName', data.name);
    setText('footerName', data.name);
    setText('year', String(new Date().getFullYear()));
    const resume = document.getElementById('resumeLink');
    if (resume && data.resumeUrl){ resume.href = data.resumeUrl; }
  }

  function renderSocials(){
    const wrap = document.getElementById('socialLinks');
    if (!wrap) return;
    (data.socials || []).forEach(s => {
      const a = createEl('a', { className: 'btn', text: s.label, attrs: { href: s.url, target: '_blank', rel: 'noopener' } });
      wrap.appendChild(a);
    });
  }

  function renderAbout(){
    setText('aboutText', data.about && data.about.text);
    const list = document.getElementById('aboutHighlights');
    (data.about && data.about.highlights || []).forEach(item => {
      const li = createEl('li', { text: item });
      list.appendChild(li);
    });
  }

  function renderSkills(){
    const grid = document.getElementById('skillsGrid');
    (data.skills || []).forEach(s => {
      const card = createEl('div', { className: 'skill' });
      const left = createEl('div', { className: 'name', text: s.name });
      const right = createEl('div', { className: 'level', text: s.level });
      card.append(left, right);
      grid.appendChild(card);
    });
  }

  function buildFilters(){
    const filters = document.getElementById('projectFilters');
    const tags = data.projectTags || ['All'];
    tags.forEach((t, idx) => {
      const f = createEl('button', { className: 'filter' + (idx === 0 ? ' active' : ''), text: t });
      f.addEventListener('click', () => {
        $$('.filter').forEach((el) => el.classList.remove('active'));
        f.classList.add('active');
        renderProjects(t);
      });
      filters.appendChild(f);
    });
  }

  function renderProjects(activeTag = 'All'){
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    const list = (data.projects || []).filter(p => activeTag === 'All' || (p.tags || []).includes(activeTag));
    list.forEach(p => {
      const card = createEl('article', { className: 'project' });
      const thumb = createEl('div', { className: 'thumb' });
      thumb.style.backgroundImage = `url(${p.image})`;
      const content = createEl('div', { className: 'content' });
      const title = createEl('h3', { text: p.title });
      const desc = createEl('p', { text: p.description });
      const stack = createEl('div', { className: 'stack' });
      (p.stack || []).forEach(s => stack.appendChild(createEl('span', { className: 'chip', text: s })));
      const links = createEl('div', { className: 'links' });
      if (p.links && p.links.live) links.appendChild(createEl('a', { className: 'btn btn-primary', text: 'Live', attrs: { href: p.links.live, target: '_blank', rel: 'noopener' } }));
      if (p.links && p.links.repo) links.appendChild(createEl('a', { className: 'btn', text: 'Code', attrs: { href: p.links.repo, target: '_blank', rel: 'noopener' } }));
      content.append(title, desc, stack, links);
      card.append(thumb, content);
      grid.appendChild(card);
    });
  }

  function renderExperience(){
    const wrap = document.getElementById('expTimeline');
    (data.experience || []).forEach(e => {
      const item = createEl('div', { className: 'exp' });
      const role = createEl('div', { className: 'role', text: `${e.role} · ${e.company}` });
      const meta = createEl('div', { className: 'meta', text: e.period });
      const ul = createEl('ul');
      (e.items || []).forEach(i => ul.appendChild(createEl('li', { text: i })));
      item.append(role, meta, ul);
      wrap.appendChild(item);
    });
  }

  function renderContact(){
    const btn = document.getElementById('contactEmail');
    if (btn && data.email) {
      btn.href = `mailto:${data.email}`;
    }
  }

  function initTheme(){
    const root = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    const apply = (mode) => {
      if (mode === 'light') { root.classList.add('light'); root.classList.remove('dark'); }
      else { root.classList.add('dark'); root.classList.remove('light'); }
      localStorage.setItem('theme', mode);
    };
    const stored = localStorage.getItem('theme');
    if (!stored) {
      if (window.matchMedia('(prefers-color-scheme: light)').matches) apply('light');
      else apply('dark');
    } else apply(stored);
    toggle && toggle.addEventListener('click', () => {
      const next = root.classList.contains('light') ? 'dark' : 'light';
      apply(next);
    });
  }

  function boot(){
    renderHeader();
    renderSocials();
    renderAbout();
    renderSkills();
    buildFilters();
    renderProjects('All');
    renderExperience();
    renderContact();
    initTheme();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

