let posts = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop&crop=center",
        body: "Ganda parang si paul #sunset #nature",
        likes: 42,
        comments: [
            { name: "charles", date: "2025-07-31", text: "21 pesos meal" },
            { name: "charles", date: "2025-7-31", text: "hakdog" }
        ]
    },
    {
        id: 2,
        image: "data:image/jpeg;base64,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",
        body: "sarap",
        likes: 28,
        comments: [
            { name: "paul laurence", date: "2025-07-31", text: "nigg" }
        ]
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop&crop=center",
        body: "lost alone nigg",
        likes: 67,
        comments: [
            { name: "Mark", date: "2025-01-31", text: "ha?????" },
            { name: "shashagurl", date: "2025-07-31", text: "haaaa??!?!?" }
        ]
    }
];

let nextId = 4;

const postForm = document.getElementById('postForm');
const imageUrlInput = document.getElementById('imageUrl');
const previewImage = document.getElementById('previewImage');
const postBodyInput = document.getElementById('postBody');
const addBtn = document.getElementById('addBtn');
const feed = document.getElementById('feed');
const createPostBtn = document.getElementById('createPostBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function init() {
    renderFeed();
    setupEventListeners();
}

function setupEventListeners() {
    imageUrlInput.addEventListener('input', handleImagePreview);
    

    postForm.addEventListener('submit', handleFormSubmit);
    
    createPostBtn.addEventListener('click', openModal);
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; 
    postForm.reset();
    previewImage.style.display = 'none';
}

function handleImagePreview() {
    const url = imageUrlInput.value.trim();
    
    if (url) {
        previewImage.src = url;
        previewImage.style.display = 'block';
        
        previewImage.onerror = function() {
            this.style.display = 'none';
            console.log('Failed to load image:', url);
        };
        
        previewImage.onload = function() {
            console.log('Image loaded successfully:', url);
        };
    } else {
        previewImage.style.display = 'none';
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const imageUrl = imageUrlInput.value.trim();
    const body = postBodyInput.value.trim();
    
    if (!imageUrl || !body) {
        alert('Please fill in all fields');
        return;
    }

    try {
        new URL(imageUrl);
    } catch (error) {
        alert('Please enter a valid URL');
        return;
    }

    const newPost = {
        id: nextId++,
        image: imageUrl,
        body: body,
        likes: 0,
        comments: []
    };

    posts.unshift(newPost);
    
    postForm.reset();
    previewImage.style.display = 'none';
    
    closeModal();
    
    renderFeed();
}

function renderFeed() {
    if (posts.length === 0) {
        feed.innerHTML = `
            <div class="empty-state">
                <h3>No posts yet</h3>
                <p>Share your first photo to get started!</p>
            </div>
        `;
        return;
    }

    feed.innerHTML = posts.map(post => createPostHTML(post)).join('');
}

function createPostHTML(post) {
    const commentsHTML = post.comments.map(comment => `
        <div class="comment">
            <span class="username">${escapeHtml(comment.name)}</span>${escapeHtml(comment.text)}
        </div>
    `).join('');

    return `
        <div class="post" data-post-id="${post.id}">
            <div class="post-header">
                <div class="post-user">
                    <div class="post-avatar">👤</div>
                    <div class="post-username">user</div>
                </div>
                <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
            </div>
            
            <img src="${escapeHtml(post.image)}" alt="Post image" class="post-image" 
                 onerror="this.src='svgdata:image/+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjBGMEYwIi8+Cjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIG5vdCBmb3VuZDwvdGV4dD4KPC9zdmc+'">
            
            <div class="post-actions">
                <div class="like-section">
                    <button class="like-btn" onclick="likePost(${post.id})" title="Like">
                        ${post.likes > 0 ? '❤️' : '🤍'}
                    </button>
                    <span class="like-count">${post.likes} likes</span>
                </div>
                
                <div class="post-caption">
                    <span class="username">user</span>${escapeHtml(post.body)}
                </div>
                
                <div class="comments-section">
                    ${commentsHTML}
                    <div class="comment-form">
                        <input type="text" class="comment-input" placeholder="Add a comment..." 
                               onkeypress="handleCommentKeypress(event, ${post.id})">
                        <button class="comment-btn" onclick="addComment(${post.id})">Add Comment</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        renderFeed();
    }
}

function deletePost(postId) {
    if (confirm('Are you sure you want to delete this post?')) {
        posts = posts.filter(p => p.id !== postId);
        renderFeed();
    }
}

function addComment(postId) {
    const postElement = document.querySelector(`[data-post-id="${postId}"]`);
    const commentInput = postElement.querySelector('.comment-input');
    const commentText = commentInput.value.trim();
    
    if (!commentText) {
        alert('Please enter a comment');
        return;
    }

    const post = posts.find(p => p.id === postId);
    if (post) {
        post.comments.push({
            name: 'you',
            text: commentText
        });
        
        commentInput.value = '';
        renderFeed();
    }
}

function handleCommentKeypress(event, postId) {
    if (event.key === 'Enter') {
        addComment(postId);
    }
}


document.addEventListener('DOMContentLoaded', init);
