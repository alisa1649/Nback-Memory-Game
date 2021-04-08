var ghpages = require('gh-pages');

ghpages.publish('./', {
    src: ["dist/**/*", "index.html"],
}, function(err) {console.log(err)});