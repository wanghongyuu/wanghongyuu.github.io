var posts=["posts/4a17b156.html","posts/3f1121d3.html","posts/38be0ba8.html","posts/33c2f16f.html","posts/30353d10.html","posts/facd388e.html","posts/6b185cce.html","posts/5938ac41.html","posts/0.html","posts/ce06c257.html","posts/6e952047.html","posts/741b372c.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};