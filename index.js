let posts = [
    {
        id: 1,
        image: "https://i.imgflip.com/7i39dh.gif",
        body: "racist",
        likes: 42,
        comments: [
            { name: "charles", date: "2025-07-31", text: "21 pesos meal" },
            { name: "alfie", date: "2025-7-31", text: "hakdog" }
        ]
    },
    {
        id: 2,
        image: "https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUya3poa2t6ZzlqczNjbWlxNGE5ZDhsbTNuMDhicTdvbzM1Y3dubmlnbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VRKheDy4DkBMrQm66p/source.gif",
        body: "super idol",
        likes: 28,
        comments: [
            { name: "paul laurence", date: "2025-07-31", text: "racist" }
        ]
    },
    {
        id: 3,
        image: "https://atlassianblog.wpengine.com/wp-content/uploads/2025/06/popular-gif.gif",
        body: "super hot fireee",
        likes: 67,
        comments: [
            { name: "Mark", date: "2025-01-31", text: "hai" },
            { name: "shashagurl", date: "2025-07-31", text: "beans" }
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
                        ${post.likes > 0 ? ' 👍 ' : ''}
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
