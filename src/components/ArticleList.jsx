import React from 'react'
import ArticleTeaser from './ArticleTeaser'
import { useContext } from 'react'
import { ArticlesContext } from '../contexts'

export default function ArticleList({articles}) {
  return (
    <div className='article-list'>
      {
        articles.map(article => {
          return <ArticleTeaser key={article.id} article={article} />
        })
      }
    </div>
  )
}
