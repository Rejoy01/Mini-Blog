import React, { useState } from 'react'
import axios from 'axios'

const CommentCreate = ({postId}) => {

    const Api = axios.create({
        baseURL:"http://localhost:4001"
    })

    const [content , setContent] = useState()

    const onSubmit = async (event) => {
        event.preventDefault();
      await Api.post(`/posts/${postId}/comments`,{content})
    }


  return (
    <div>
      <form onSubmit={onSubmit}>

            <div className="form-group">
                <label htmlFor="">New Comment</label>
                <input type="text" onChange={e => setContent(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate
