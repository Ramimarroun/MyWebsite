setTimeout(function () {
    document.getElementById("customAlert").style.display = "block";
  }, 2000);
  function closeAlert() {
    document.getElementById("customAlert").style.display = "none";
  }


const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const links = document.querySelector('.sidebar-links');
hamburger.addEventListener('click', function() {
  hamburger.style.display = 'none';
  close.style.display = 'block';
 links.classList.add('active-sidebar');
});
close.addEventListener('click', function() {
  hamburger.style.display = 'block';
  links.classList.remove('active-sidebar');
  close.style.display = 'none';
});
window.addEventListener('resize', () => {
  // 👉 Run this code every time the browser window changes size

  if (window.innerWidth > 1100) {
    hamburger.style.display = '';   // رجّع التحكم للـ CSS
    close.style.display = '';       // رجّع التحكم للـ CSS
    links.classList.remove('active-sidebar'); // سكّر القائمة
  }
});