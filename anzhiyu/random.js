var posts=["posts/4a17b156.html","posts/6b185cce.html","posts/5938ac41.html","posts/6e952047.html","posts/0.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};