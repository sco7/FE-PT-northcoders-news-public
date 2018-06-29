
export const getArticleById = articleId => {
  const url = `https://young-reef-95329.herokuapp.com/api/articles/${articleId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};
