import React from 'react'
import articleListData from './article-content';
export default function ArticleList() {

  return (
    <div>ArticleList
      {
        articleListData.map(function (d, idx) {
          return (<li key={idx}>{d.name}</li>)
        })}
    </div>
  )
}
