const argv = require('minimist')(process.argv.slice(2));

const url = argv.u;
const reactMarkdown = argv["react-markdown"]

const { convertPost } = require("./lib/devtoToMarkdown")

convertPost(url, reactMarkdown)
    .then(markdown => {
        console.log(markdown);
    }).catch(e => {
        console.error(e);
        process.exit(1);
    });
