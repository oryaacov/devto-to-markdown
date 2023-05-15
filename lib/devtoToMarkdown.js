const { get } = require('axios');

async function convertPost(url) {
  ensureDevToUrl(url);
  const articleId = await getArticleId(url);
  
  return markdown = await getMarkdown(articleId);
}

function ensureDevToUrl(url) {
  if (!url) {
    throw new Error('Please provide a URL');
  }

  const devHttpsRegex = /^https:\/\/dev.to\/.*$/;
  if (!devHttpsRegex.test(url)) {
    throw new Error('Invalid URL: Must be a valid https://dev.to URL');
  }
}

async function getArticleId(url) {
  const response = await get(url);
  const articleIdRegex = new RegExp(/.*data-commentable-id=\"(?<id>\d+)\"/);

  const match = articleIdRegex.exec(response.data);
  if (!match?.groups?.id) {
    throw new Error('Failed to extract article id');
  }
  
  return match.groups.id;
}

async function getMarkdown(articleId) {
  const url = `https://dev.to/api/articles/${articleId}`;
  const response = await get(url);

  if (!response?.data?.body_markdown) {
    throw new Error(`unexpected response body ${JSON.stringify(response)}`);
  }

  return response.data.body_markdown;
}


module.exports = {
  ensureDevToUrl,
  convertPost,
};
