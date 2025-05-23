import  express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors())

const posts = {}

const handleEvents =(type,data)=>{
    
    if(type === 'PostCreated'){
        const {id , title} = data

        posts[id] = {id , title , comments:[]}

    }
   
    // console.log(posts);
    if(type === 'CommentCreated'){
        const {id , content , postId ,status} = data
      

        const post = posts[postId]
        post.comments.push({id , content ,status})

    }
    // console.log(type);
  if(type =='CommentUpdated'){
   
    
        const {id , content , postId ,status} = data
        

        const post = posts[postId]
        const comment = post.comments.find(comment =>{
            return comment.id === id
        })
        comment.status = status
        comment.content = content
    }
}

app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/events',(req,res)=>{

    const {type , data} = req.body
    handleEvents(type, data)

    // console.log(posts);
    
    res.send({})



})

app.listen(4002 , async()=> {
    console.log('Listening on 4002');  
    
    const res = await axios.get('http://localhost:4005/events')

    for (let event of res.data){

        console.log('Processing event',event.type);

        handleEvents(event.type, event.data)
    }

})