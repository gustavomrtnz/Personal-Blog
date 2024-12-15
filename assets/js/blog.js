document.addEventListener('DOMContentLoaded', function() {
    const recentPostsSection = document.getElementById('recent-posts');

    function loadRecentPosts() {
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        const recentPosts = posts.slice(0, 3); // Get the 3 most recent posts

        recentPosts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content.substring(0, 100)}...</p>
                <small>Posted on: ${post.date}</small>
            `;
            recentPostsSection.appendChild(postElement);
        });
    }

    loadRecentPosts();
});