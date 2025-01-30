import React , {useState , useEffect} from 'react'
import axios from 'axios'


const CommentList = ({comments}) => {
   
    const renderedComments = comments?.map(comment =>{
        let content ;

        if(comment.status == "approved"){
          content = comment.content
        }
        if(comment.status == "pending"){
          content = "comment under moderation"
        }
        if(comment.status == "rejected"){
          content = "comment rejected"
        }

        return <li  key={comment.id}>{content}</li>
    })

  return (
    <ul>
      {renderedComments}
    </ul>
  )
}

export default CommentList
// using query service we don't need to make get requests for each comment . Query servcie will provide all the info that recevide from event bus

 //After evnt bus and query service we get Post And comment details from query service no need to fetch comment details using PostId
    // we can delete fetch method inside the comment list
    // const[comments,setComment] = useState([])

    // const fetchData = async () => {

    //     const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
    //     setComment(res.data)
    //     // console.log(res.data);

    // }

    // useEffect(()=>{      
    //     fetchData()
    //     // 
        
    // },[])
