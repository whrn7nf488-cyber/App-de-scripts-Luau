function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  
  if (sidebar.style.left === '0px') {
    closeMenu();
  } else {
    sidebar.style.left = '0px';
    overlay.style.display = 'block';
  }
}

function closeMenu() {
  document.getElementById('sidebar').style.left = '-280px';
  document.getElementById('overlay').style.display = 'none';
}

// Mostrar sección
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.classList.add('active');
  });
});

// Copiar script individual
function copyScript(id) {
  const code = document.getElementById(id).textContent;
  navigator.clipboard.writeText(code).then(() => {
    const btn = event.target.closest('.copy-btn');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
    setTimeout(() => btn.innerHTML = original, 2000);
  });
}

// Copiar ambos scripts
function copyBothScripts(id1, id2) {
  const code1 = document.getElementById(id1).textContent;
  const code2 = document.getElementById(id2).textContent;
  const fullCode = `-- CLIENT SCRIPT --\n${code1}\n\n-- SERVER SCRIPT --\n${code2}`;
  
  navigator.clipboard.writeText(fullCode).then(() => {
    const btn = event.target.closest('.copy-btn');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
    setTimeout(() => btn.innerHTML = original, 2000);
  });
}
