const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// const cors = require('cors');
require('dotenv').config();

const app = express();

// app.use(cors());

app.use(bodyParser.json());

massive(process.env.DB_CONNECTION_STRING)
.then(dbInstance => app.set('DB', dbInstance));

app.get('/api/blogs', (req, res) => {
    const dbInstance = req.app.get('DB')
    dbInstance.get_blogs()
    .then((resp) => {
        res.status(200).send(resp)
    })
    .catch((err) => {
        console.log('err', err)
    })
})

// made statehandler
// made endpoint
// made connection to dbInstance
// need to render on blog view, conditionally render, then test, bug fix, test, bug fix,

app.post('/api/new-post', (req, res) => {
    const dbInstance = req.app.get('DB')
    const {author, title, content, imageurl} = req.body

    dbInstance.post_blog([author, title, content, imageurl])
    .then((resp) => {
        res.status(200).send("got posted")
    })
    .catch((err) => {
        console.log('err', err)
    })
})

console.log('process.env.DB_CONNECTION_STRING', process.env.DB_CONNECTION_STRING)

const port = 3535;



app.listen(port, () => {console.log(`app is listening on port ${port}`)})