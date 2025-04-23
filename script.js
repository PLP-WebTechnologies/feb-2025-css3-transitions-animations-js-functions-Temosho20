const button = document.getElementById('animate-btn');

//Function to store user preference in local storage
function storeUserPreference(preference) {
  localStorage.setItem('animateButton', prefence);
}

//Function to retrive user preference from local storage
function getUserPreference() {
  return localStorage.getItem('animateButton');
}

//Function to trigger animation 
function triggerAnimation() {
  button.classList.add('animate');
  setTimeout(() => {
    button.classList.remove('animate')
  }, 1000) //Remove animation class after 1 second
}
//Check if user preference is stored
if (getUserPreference() === 'true') {
  button.addEventListener('click', triggerAnimation);
}

//Store user preference and trigger animation on click
button.addEventListener('click', () => {
  storeUserPreference('true');
  triggerAnimation();
});
