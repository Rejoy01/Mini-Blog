import React ,{useState}from 'react'
import axios from 'axios'

export const Api = axios.create({
    baseURL: 'http://localhost:4000',
})

const Posts = () => {


    const [title , setTitle] = useState('')
    const onSubmit = async (event) =>{
        event.preventDefault();
        await Api.post("/posts",{
            title
        })
        setTitle('')
    }



  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="">Title</label>
            <input type="text" className="form-control" onChange={e => setTitle(e.target.value)}
            
            />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Posts
