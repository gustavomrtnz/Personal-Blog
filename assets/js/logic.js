document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const posts = document.querySelectorAll('.blogcontainer article');

        posts.forEach(post => {
            const title = post.querySelector('h3').textContent.toLowerCase();
            const content = post.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                post.style.display = '';
            } else {
                post.style.display = 'none';
            }
        });
    }
});