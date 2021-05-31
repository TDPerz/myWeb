require('dotenv').config()
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const Post = require('./model/Post')
const app = express();

mongoose.connect(process.env.MONGOCLUSTER, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO ERROR!!!!")
    console.log(err)
})

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.urlencoded({extended : true}));

app.get('/', (req, res)=>{
    res.render('home');
})

app.get('/project/:name', async (req,res)=>{
    let data = await Post.getPost(req.params.name);
    res.render('post', {data});
})

app.get('/projects', async (req, res)=>{
    let Proyectos = await Post.getAllPost();
    res.render('proyectos', {Proyectos});
})

const host = process.env.LOCALHOST || '0.0.0.0';
const port = process.env.PORT || '3000';

let server = app.listen(port,host,()=>{
    console.log("Iniciado!! puerto: " + server.address().port);
  });