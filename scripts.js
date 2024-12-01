document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
document.getElementById('nextPageButton').addEventListener('click', function() { window.location.href = 'nextpage.html'; });