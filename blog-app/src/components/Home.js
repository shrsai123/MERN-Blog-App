import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  
    
  








  return (
  <div>
     <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Created: {new Date(post.createdAt).toLocaleString()}</p>
          <p>Updated: {new Date(post.updatedAt).toLocaleString()}</p>
          <Link to={`/edit/${post._id}`}>Edit</Link>{' '}
          <Link to={`/delete/${post._id}`}>Delete</Link>
        </div>
      ))}

<Link to="/add">Add New Post</Link>
    
 </div>
);

};

export default Home;
