import  express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const App = express();

App.use(bodyParser.json())
const events = []
App.post('/events',(req,res)=>{
    const event = req.body

    events.push(event)
    

    axios.post('http://localhost:4000/events',event);
    axios.post('http://localhost:4002/events',event).catch((err)=>{
        console.log(err.message);
        
    });
    axios.post('http://localhost:4001/events',event).catch((err)=>{
        console.log(err.message);
        
    });
    axios.post('http://localhost:4003/events',event).catch((err)=>{
        console.log(err.message);
        
    });

    res.send({status : 'OK'})

})

App.get('/events',(req,res)=>{
    res.send(events)
})

App.listen(4005,()=>{
    console.log('Listening on 4005');
    
})