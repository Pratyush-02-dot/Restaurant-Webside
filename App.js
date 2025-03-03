// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple form validation for the Book Table section
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for testing
    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let date = document.querySelector('input[type="date"]').value;
    let time = document.querySelector('input[type="time"]').value;

    if (name && email && date && time) {
        alert(`Thank you, ${name}! Your table is booked for ${date} at ${time}.`);
    } else {
        alert('Please fill in all fields.');
    }
});