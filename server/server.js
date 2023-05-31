const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());


// Define the blog post schema
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create the blog post model
const Post = mongoose.model('Post', postSchema);


mongoose.connect('mongodb://localhost/blogDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });

 

  

 



  app.get('/api/posts',async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
  
  app.get('/api/posts/:id',(req, res) => {
    const{id}=req.params;
    Post.findById(id)
    .then(post=>{
        if(!post)return res.status(400).json({error:'Post not found'});
        res.json(post);
    })
    .catch(error=>res.status(500).json({error:error.message }))
  });
  
  app.post('/api/posts', (req, res) => {
    const{title,content}=req.body;
    const post=new Post({title,content});
    post.save()
    .then(savedPost=>res.status(201).json(savedPost))
    .catch(error=>res.status(500).json({error:'Internal Server error'}))
  });
  
  app.put('/api/posts/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    Post.findByIdAndUpdate(id, { title, content, updatedAt: Date.now() }, { new: true })
      .then(updatedPost => {
        if (!updatedPost) return res.status(404).json({ error: 'Post not found' });
        res.json(updatedPost);
      })
      .catch(error => res.status(500).json({ error: 'Internal server error' }));
  });
  
  
  app.delete('/api/posts/:id', (req, res) => {
    const { id } = req.params;
  Post.findByIdAndDelete(id)
    .then(deletedPost => {
      if (!deletedPost) return res.status(404).json({ error: 'Post not found' });
      res.json({ message: 'Post deleted successfully' });
    })
    .catch(error => res.status(500).json({ error: 'Internal server error' }));
});
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });