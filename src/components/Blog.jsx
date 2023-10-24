import React from 'react'
import "../../src/pages/blogs/blogs.css";

function Blog(props) {

  return (
    <>
        <div className="col ">
          <div className="card h-100">
            <img src={props.thumbnail} className="card-img-top" alt="post-thumbnail"></img>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <p className="card-text"><small>category: </small>{props.category}</p>
              <p className='card-text'><small className="text-muted">author: </small><i>{props.author}</i></p>
              <p className="card-text">  <small className="text-muted"> <i>Posted on: </i>{new Date(props.date).toLocaleDateString()}</small></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Blog;