var posts=["posts/4a17b156.html","posts/505b9ee7.html","posts/c703b936.html","posts/b1609aae.html","posts/2353f099.html","posts/62a3a0d6.html","posts/85fc7b85.html","posts/4a098468.html","posts/8303052c.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};