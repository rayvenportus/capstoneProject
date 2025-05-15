function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
  }
  
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.section');
  const sectionTitle = document.getElementById('section-title');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const sectionId = item.getAttribute('data-section');
  
      // Hide all sections
      sections.forEach(sec => sec.style.display = 'none');
  
      // Show the target section
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.style.display = 'block';
        sectionTitle.textContent = item.textContent;
      }
  
      // Collapse sidebar on small screens
      if (window.innerWidth <= 768) {
        toggleSidebar();
      }
    });
  });
 
  