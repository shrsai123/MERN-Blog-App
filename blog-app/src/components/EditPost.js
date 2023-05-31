import React, { useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
const handleSubmit = (e) => {
  e.preventDefault();
  axios
    .put(`http://localhost:5000/api/posts/${id}`, { title, content }, { 'Content-Type': 'application/json' })
};
  return (
    <div>
      <h1>Edit Blog Post</h1>
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
        <button onClick={handleSubmit}>Edit Post</button>
    </div>
  );
}

export default EditPost;