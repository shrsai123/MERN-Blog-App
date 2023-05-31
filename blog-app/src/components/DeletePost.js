import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';

function DeletePost() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`).then(response=>{
        setPost(response.data);

      })
    },[id]);




  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/posts/${id}`)
     
     
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Created: {new Date(post.createdAt).toLocaleString()}</p>
      <p>Updated: {new Date(post.updatedAt).toLocaleString()}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeletePost;