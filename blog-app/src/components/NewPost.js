import React, { useState } from 'react';
//import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function NewPost() {
  //const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


    const handleSubmit = () => {
    
      // Send a POST request to create a new blog post
      axios.post('http://localhost:5000/api/posts', { title, content })
    };
   
    
    
    
    
    
    

  return (
    <div>
      <h1>Add New Blog Post</h1>
    
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Content:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <button onClick={handleSubmit}>Add New Post</button>
      
    </div>
  );

}

export default NewPost;