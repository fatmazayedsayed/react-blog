import React from 'react'
import { useParams } from 'react-router-dom';

import articleListData from './article-content';

export default function Article() {
  const params = useParams();
  const articleId = parseInt(params.articleId);
  const articleData = articleListData.find((art) => art.id === articleId);
  return (
    <>
      <h1> {articleData.name}</h1>
      <h1> {articleData.title}</h1>
      {articleData.content.map(paragraph => ( <p>{paragraph}</p> ))}
    </>
  )
}
