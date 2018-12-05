const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session')
// const cors = require('cors');
require('dotenv').config();

const app = express();

// app.use(cors());

app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60 * 60 * 24 * 14 * 1000
        //two weeks
    }
}))


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

app.get('/api/usercheck', (req, res) => {
    //need to check in DB if all three input values match the db entries
    const dbInstance = req.app.get('DB')
    // console.log('req.query', req.query)
    
    const {admin_name, admin_password, middlename} = req.query
    dbInstance.get_admin([admin_name, admin_password, middlename])
    .then((user) => {
        req.session.user = {
            admin_name: admin_name,
            admin_password: admin_password,
            middlename: middlename
        }

        user = req.session.user
        console.log('user', user)
        res.status(200).send(user)
    })
    .catch((err) => {
        console.log('err', err)
    })
})

app.put('/api/posts/:id',  (req, res) => {
    const dbInstance = req.app.get('DB');
    const {id, author, title, content, imageurl} = req.body;
    dbInstance.edit_post([author, title, content, imageurl,  id])
    .then((prods) =>  {
        res.status(200).send(prods)
})
    .catch((err) => res.status(500).send(err));
},)
app.get('/api/user-data', (req, res) => {
    res.json({user: req.session.user})
})
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

app.post('/api/send-email', function (req, res) {
    console.log('hit!')

    console.log("req.body", req.body )
    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 3535,
        auth: {
            user: "danabennie.com@gmail.com",
            //need Danas new password
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false,

        }
    });

    let mailOptions = {
        from: req.body.fromEmail, // sender address
        to: 'danabennie.com@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        html: `<h2>from:${req.body.name}</h2><br/><h2> Email: ${req.body.fromEmail}</h2><b>${req.body.message}</b>` // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        });
    });

app.delete('/api/post/:id', (req, res) =>{
    const dbInstance = req.app.get('DB')
    const {params} = req
    dbInstance.delete_post([params.id])
    .then((posts) => res.status(200).send(posts) )
    .catch((err) => res.status(500).send(err) );
})

const port = 3535;



app.listen(port, () => {console.log(`app is listening on port ${port}`)})