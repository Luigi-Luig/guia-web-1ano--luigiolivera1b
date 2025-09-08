const body = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
const yearEl = document.getElementById('year');

function applyTheme(t){
  document.documentElement.setAttribute('data-theme', t);
  themeToggle.setAttribute('aria-pressed', t === 'dark');
}

const saved = localStorage.getItem('theme') || 'light';
applyTheme(saved);
themeToggle.addEventListener('click', ()=>{
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

navToggle.addEventListener('click', ()=>{
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  mainNav.style.display = expanded ? 'none' : 'block';
});

if(yearEl) yearEl.textContent = new Date().getFullYear();

// small helper to ensure keyboard focus visible when navigating via keyboard
document.body.addEventListener('keydown', (e)=>{
  if(e.key === 'Tab') document.body.classList.add('user-is-tabbing');
});

export {};
