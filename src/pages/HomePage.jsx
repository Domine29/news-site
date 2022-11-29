import React from 'react'
import ArticleList from '../components/ArticleList'

export default function HomePage({articles}) {

  return (
    <div>
      
      <ArticleList articles={articles}/>
    </div>
  )
}
