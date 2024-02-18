const apiKey = 'qsOWjdfFkXwxBeMfhkKrJMB7GMJgFmlHaqTScIujLmex6Get3OJh2cnC';
const form = document.getElementById('email-form');
const image = document.getElementById('ocean-image');

// Fetch a random ocean image from Pexels
fetch(`https://api.pexels.com/v1/search?query=ocean&per_page=1`, {
  headers: {
    Authorization: apiKey
  }
})
.then(response => response.json())
.then(data => {
  const imageUrl = data.photos[0].src.large;
  image.src = imageUrl;
});

// Email the current image when the form is submitted
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;

  // Send the email using PHP
  fetch('send_email.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `email=${email}&image=${image.src}`
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => console.error('Error:', error));
});
