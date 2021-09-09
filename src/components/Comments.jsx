import React from 'react';

import Comment from './Comment';

function Comments({ comments }) {

  return (
    <div className="comment-block">
      <h1 className="comment-block__title">Comments</h1>
      <div className="comment-block__items">
        {comments.length
          ? comments.map(({ id, by, kids, text, time }) => (
              <Comment
                key={id}
                by={by}
                time={time}
                text={text}
                kids={kids} />
            ))

          : <p>The news contains no comments</p>}
      </div>
    </div>
  )
}

export default Comments;
