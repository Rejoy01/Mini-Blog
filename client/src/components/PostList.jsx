import React , { useState , useEffect } from 'react' ;
import axios from 'axios';
import { Api } from './Posts';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';


const PostList = () => {

    const [posts , setPosts] = useState("{}")
    const fetchPosts = async () =>{
        // before event bus and query services
        // const res = await Api.get('/posts')
        const res = await axios.get('http://localhost:4002/posts')
        setPosts(res.data)
        
        
    }
    useEffect(()=>{
        fetchPosts();
        console.log(posts);
    },[]);

 const renderedPosts = Object.values(posts).map(post => {
  
      return( 
    <div className="card" style={{width:'30%'}} key={post.id}>

        <div className="card-body" key={post.id}>
            <h3>{post.title}</h3>
            <CommentList comments={post.comments}/>
            <CommentCreate postId={post.id}/>
        </div>
        

    </div>
    )
    //before event bust we need to pass post.id to fecth comment 
    //After evnt bus and query service we get Post And comment details from query service no need to fetch comment details using PostId
    // we can delete fetch method inside the comment list
    // return( 
    // <div className="card" style={{width:'30%'}} key={post.id}>

    //     <div className="card-body" key={post.id}>
    //         <h3>{post.title}</h3>
    //         <CommentList postId={post.id}/>
    //         <CommentCreate postId={post.id}/>
    //     </div>
        

    // </div>
    // )
 })
    
  return (
    <div className='d-flex flex-row flex-wrap justify-content-between' >
        {renderedPosts}
       
    </div>
  )
}

export default PostList
