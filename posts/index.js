import express from 'express';
import { randomBytes } from "crypto";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title, comments: [] // Initialize comments array here
    };

    res.status(201).send(posts[id]);

    await axios.post("http://localhost:4005/events", {
        type: 'PostCreated',
        data: {
            id, title
        }
    });
});

app.post('/events', (req, res) => {
    console.log('Received', req.body.type);

    const { type, data } = req.body;

    if (type === 'CommentCreated') {
        const { id, content, postId } = data;

        const post = posts[postId];
        if (post) {
            post.comments.push({ id, content }); // Push comment to the comments array
        }
    }

    res.send({});
});

app.listen(4000, () => {
    console.log("Latest");
    console.log('listening on port 4000');
});
