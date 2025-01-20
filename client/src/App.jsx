import React from 'react'
import Posts from './components/Posts'
import PostList from './components/PostList'




const App = () => {
  return (
    <div className='container'>
        <h1>
            Create Post
        </h1>
        <Posts />
        <hr />
        <h1>
            Posts
        </h1>
        <PostList />
    </div>
  )
}

export default App
