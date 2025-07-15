document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    link.style.transform = "scale(0.96)";
    setTimeout(() => {
      link.style.transform = "scale(1)";
    }, 150);
  });
});