// Collection Category Filter
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.collection-tab');
  const sections = document.querySelectorAll('.collection-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show/hide sections
      sections.forEach(section => {
        const sectionCategory = section.dataset.category;

        if (category === 'all') {
          section.classList.remove('hidden');
        } else if (sectionCategory === category) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });

      // Smooth scroll to first visible section
      setTimeout(() => {
        const firstVisible = document.querySelector('.collection-section:not(.hidden)');
        if (firstVisible) {
          firstVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  });
});
