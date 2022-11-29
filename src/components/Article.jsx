import React from 'react'

export default function Article({id, title, createdDate, url, author, objectID}) {
  return (
    <div className='article'>
      <h1>{id}. {title}</h1>
      <p>{createdDate}</p>
      <iframe title={url} src={url} width='80%' height='300'></iframe>
      {/* <h2><a href={url}>Go to artcle page</a></h2> */}
      <h5>Author: {author}</h5>
      <p>object id: {objectID}</p>
    </div>
  )
}
