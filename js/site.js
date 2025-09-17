// Hamburger drawer open/close (shared)
const hamb = document.getElementById('hamb');
const drawer = document.getElementById('drawer');
const scrim = document.querySelector('[data-close]');

function openDrawer(){ drawer.classList.add('open'); drawer.setAttribute('aria-hidden','false'); }
function closeDrawer(){ drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true'); }

if (hamb) hamb.addEventListener('click', openDrawer);
if (scrim) scrim.addEventListener('click', closeDrawer);

document.querySelectorAll('[data-route]').forEach(a=>{
  a.addEventListener('click', ()=>{
    // highlight active in all pages
    document.querySelectorAll('[data-route]').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
    closeDrawer();
  });
});

// highlight current page link
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  const map = {
    'index.html':'Home',
    'iit.html':'IIT',
    'sat.html':'SAT',
    'tuitions.html':'Tuitions',
    'register.html':'Register as a Tutor'
  };
  const text = map[path] || 'Home';
  document.querySelectorAll('[data-route]').forEach(x=>{
    if(x.textContent.trim()===text){ x.classList.add('active'); }
  });
})();
