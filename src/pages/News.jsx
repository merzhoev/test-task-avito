import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Comments } from '../components';
import { fetchNewsItem, fetchComments } from '../redux/actions/news';

function News() {
  const dispatch = useDispatch()
  const { news, comments, isLoaded } = useSelector(({ newsPage }) => newsPage)
  const { id } = useParams()
  
  React.useEffect(() => {
    dispatch(fetchNewsItem(id))
  }, [dispatch, id])

  return (
    <div className="container">
      {isLoaded
      ? news && <>
          {news.url && <p>Link: <a href={news.url} target="_blank" rel = "noreferrer">{news.url}</a></p>}
          <p>Title: {news.title}</p>
          <p>Posted: {news.time}</p>
          <p>Author: {news.by}</p>
          <p>Count of comments: {news.descendants}</p>
          <Comments comments={comments} />
        </>
      : 'Loading...'}
    </div>
  )
}

export default News;
