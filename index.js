// Get all the "View Profile" links
const viewProfileLinks = document.querySelectorAll('a[href="#"]');

// Add click event listener to each link
viewProfileLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const alumniName = link.parentNode.querySelector('h2').innerText;
    alert(`You clicked on the profile of ${alumniName}`);
  });
});
