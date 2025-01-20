import  express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const App = express();

App.use(bodyParser.json())
App.post('/events',(req,res)=>{
    const event = req.body

    axios.post('http://localhost:4000/events',event);
    axios.post('http://localhost:3000/events',event);
    axios.post('http://localhost:4001/events',event);

    res.send({status : 'OK'})

})

App.listen(4005,()=>{
    console.log('Listening on 4005');
    
})