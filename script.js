document.addEventListener('click',function(e){if(e.target.id==='copyEmail'){const email='vinigalvao0115@gmail.com';navigator.clipboard?.writeText(email).then(()=>{const old=e.target.innerText;e.target.innerText='Copiado!';setTimeout(()=>e.target.innerText=old,1500)}).catch(()=>{alert('Copie o e-mail: '+email)})}});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const href=a.getAttribute('href');if(href&&href.length>1){e.preventDefault();const el=document.querySelector(href);if(el) el.scrollIntoView({behavior:'smooth',block:'start'})}})});

// WhatsApp Form Handler
document.getElementById('whatsapp-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('whatsapp-name').value;
  const message = document.getElementById('whatsapp-message').value;
  
  const whatsappText = `Olá Marcos, meu nome é ${name}. ${message}`;
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B5511978105570&text=${encodeURIComponent(whatsappText)}&type=phone_number&app_absent=0`;
  
  window.open(whatsappUrl, '_blank');
});

// Download CV Handler
document.getElementById('downloadCV')?.addEventListener('click', function(e) {
  e.preventDefault();
  
  // Use the real CV file from the portfolio folder
  const cvUrl = 'CV_Marcos_Vinicius.pdf';
  
  // Create a temporary link to download the file
  const a = document.createElement('a');
  a.href = cvUrl;
  a.download = 'Marcos_Vinicius_CV.pdf';
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  // Show success message
  const originalText = e.target.innerHTML;
  e.target.innerHTML = '✅ CV Baixado!';
  setTimeout(() => {
    e.target.innerHTML = originalText;
  }, 2000);
});

// Animate skill bars on scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBar = entry.target;
      const skillLevel = skillBar.getAttribute('data-skill');
      const fillBar = skillBar.querySelector('.skill-fill');
      
      setTimeout(() => {
        fillBar.style.width = skillLevel + '%';
      }, 200);
      
      observer.unobserve(skillBar);
    }
  });
}, observerOptions);

// Observe all skill bars
document.querySelectorAll('.skill-progress').forEach(skillBar => {
  const fillBar = skillBar.querySelector('.skill-fill');
  fillBar.style.width = '0%';
  observer.observe(skillBar);
});
