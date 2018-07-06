export const getArticleById = articleId => {
  const url = `https://young-reef-95329.herokuapp.com/api/articles/${articleId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getAllArticles = () => {
  const url = 'https://young-reef-95329.herokuapp.com/api/articles';
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getAllUsers = () => {
  const url = 'https://young-reef-95329.herokuapp.com/api/users';
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getUserById = userId => {
  const url = `https://young-reef-95329.herokuapp.com/api/users/${userId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getAllTopics = () => {
  const url = 'https://young-reef-95329.herokuapp.com/api/topics';
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getCommentsByArticle = articleId => {
  const url = `https://young-reef-95329.herokuapp.com/api/articles/${articleId}/comments`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getArticlesByTopic = topicId => {
  const url = `https://young-reef-95329.herokuapp.com/api/topics/${topicId}/articles`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const putArticleVotesByIdLike = articleId => {
  const url = `https://young-reef-95329.herokuapp.com/api/articles/${articleId}?vote=up`;
  return fetch(url, { method: 'PUT' }).then(res => {
    return res.json();
  });
};

export const putArticleVotesByIdDislike = articleId => {
  const url = `https://young-reef-95329.herokuapp.com/api/articles/${articleId}?vote=down`;
  return fetch(url, { method: 'PUT' }).then(res => {
    return res.json();
  });
};

export const postCommentToArticle = (articleId, comment) => {
  const url = `https://young-reef-95329.herokuapp.com/api/articles/${articleId}/comments`;
  return fetch(`${url}`, {method: 'POST', headers: new Headers({'Content-Type': 'application/json'}), body: JSON.stringify({comment})})
  .then(res => {
      return res.json()
  })
}