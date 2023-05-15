const argv = require('minimist')(process.argv.slice(2));
const url = argv.u;

const { convertPost } = require("./lib/devtoToMarkdown")

convertPost(url)
    .then(markdown => {
        console.log(markdown);
    }).catch(e => {
        console.error(e);
        process.exit(1);
    });

