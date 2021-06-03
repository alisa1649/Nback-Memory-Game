var ghpages = require('gh-pages');

ghpages.publish('./', {
    src: ["dist/**/*", "index.html", "assets/*"],
}, function(err) {console.log(err)});