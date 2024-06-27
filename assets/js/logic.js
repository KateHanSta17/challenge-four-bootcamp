// TO DO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function updateCircleColor(mode) {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.style.setProperty('--circle-color', '#784D92');
    } else {
      root.style.setProperty('--circle-color', '#784D92');
    }
  }
  
  function applyMode(mode) {
    document.body.classList.toggle('dark', mode === 'dark');
    document.body.classList.toggle('light', mode === 'light');
    updateCircleColor(mode);
    localStorage.setItem('mode', mode);
  }
  
  // Toggle light/dark mode
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle');
    const savedMode = localStorage.getItem('mode') || 'light';
    
    // Apply the saved theme
    applyMode(savedMode);
    if (toggleButton) {
      toggleButton.checked = savedMode === 'dark';
      toggleButton.addEventListener('change', function() {
        const mode = toggleButton.checked ? 'dark' : 'light';
        applyMode(mode);
      });
    }
  });
  
  // TO DO: Create functions to read and write from local storage
  function readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
  
  function writeToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  