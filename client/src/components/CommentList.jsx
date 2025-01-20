import React , {useState , useEffect} from 'react'
import axios from 'axios'

const CommentList = ({postId}) => {
    
    const[comments,setComment] = useState([])

    const fetchData = async () => {

        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
        setComment(res.data)
        // console.log(res.data);

    }

    useEffect(()=>{
        fetchData()
        // 
        
    },[])

    const renderedComments = comments.map(comments =>{
        return <li  key={comments.id}>{comments.content}</li>
    })

  return (
    <ul>
      {renderedComments}
    </ul>
  )
}

export default CommentList
