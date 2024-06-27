// TO DO: Create a variable that selects the main element
const blogPostsContainer = document.getElementById('blogPosts');
const toggleButton = document.getElementById('toggle');
const backButton = document.getElementById('back');

// TO DO: Create a function that builds an element and appends it to the DOM
function createBlogPostElement(post) {
  const postElement = document.createElement('article');
  postElement.classList.add('card');
  postElement.innerHTML = `
    <h2>${post.title}</h2>
    <blockquote>${post.content}</blockquote>
    <p>By ${post.username}</p>
  `;
  blogPostsContainer.appendChild(postElement);
}

// TO DO: Create a function that handles the case where there are no blog posts to display
function displayNoPostsMessage() {
  blogPostsContainer.innerHTML = '<p>No Blog posts yet...</p>';
}

// TO DO: Create a function that reads from local storage and returns the data
function getBlogPostsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('blogPosts')) || [];
}

// TO DO: Call the function to render the list of blog posts
function renderBlogPosts() {
  const blogPosts = getBlogPostsFromLocalStorage();
  if (blogPosts.length === 0) {
    displayNoPostsMessage();
  } else {
    blogPosts.forEach(createBlogPostElement);
  }
}

// Toggle light/dark mode
toggleButton.addEventListener('change', function() {
  const mode = toggleButton.checked ? 'dark' : 'light';
  document.body.classList.toggle('dark', mode === 'dark');
  document.body.classList.toggle('light', mode === 'light');
  localStorage.setItem('mode', mode);
});

// Go back to the form page
backButton.addEventListener('click', function() {
  window.location.href = 'index.html';
});

// Apply the saved theme and render posts
document.addEventListener('DOMContentLoaded', function() {
  const savedMode = localStorage.getItem('mode') || 'light';
  document.body.classList.add(savedMode);
  toggleButton.checked = savedMode === 'dark';
  renderBlogPosts();
});
