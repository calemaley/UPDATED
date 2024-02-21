document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('data-target');
        document.querySelectorAll('#main-content section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(target + '-content').classList.add('active');
    });
});
