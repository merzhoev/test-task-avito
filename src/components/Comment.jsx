import React from 'react'

function Comment({ by, kids, text, time }) {
  return (
    <div className="comment-block__item">
      <p>by: {by}</p>
      <p>posted: {time}</p>
      <p>text: {text}</p>
    </div>
  )
}

export default Comment;
