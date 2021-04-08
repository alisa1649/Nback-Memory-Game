var ghpages = require('gh-pages');

ghpages.publish('dist', {
    src: "index.html",
}, function(err) {console.log(err)});
