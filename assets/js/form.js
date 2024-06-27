// TO DO: Create a variable that selects the form element
const blogForm = document.getElementById('blogForm');
const errorMessage = document.getElementById('errorMessage');

// TO DO: Create a function that handles the form submission.
// Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function.
// If the form is submitted with missing data, display an error message to the user.
const handleFormSubmission = function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (username === '' || title === '' || content === '') {
    errorMessage.style.display = 'block';
    return;
  }

  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogPosts.push({ username, title, content });
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

  redirectPage('./blog.html');
};

let redirectURL = './blog.html';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TO DO: Add an event listener to the form on submit.
// Call the function to handle the form submission.
blogForm.addEventListener('submit', handleFormSubmission);
