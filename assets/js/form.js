document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blog-form');
    const blogContainer = document.querySelector('.blogcontainer');

    // Load existing posts from localStorage
    loadPosts();

    blogForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        
        if (title && content) {
            addPost(title, content);
            blogForm.reset();
        }
    });

    function addPost(title, content) {
        const post = {
            id: Date.now(),
            title: title,
            content: content,
            date: new Date().toLocaleString()
        };

        // Save to localStorage
        let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.push(post);
        localStorage.setItem('blogPosts', JSON.stringify(posts));

        // Add to DOM
        displayPost(post);
    }

    function displayPost(post) {
        const postElement = document.createElement('article');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <small>Posted on: ${post.date}</small>
        `;
        blogContainer.prepend(postElement);
    }

    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.forEach(displayPost);
    }
});