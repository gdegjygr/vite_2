import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PostsPage = () => {
const [post, setPost] = useState([])

    useEffect(() => {
        const request = async () => {
          const response = await axios.get(`https://dummyjson.com/posts?limit=12`);
          setPost(response.data.posts);
        }
        request()
    }, [])

  return (
    <>
      <h1>Posts:</h1>
      {post.map((item) => (
       <li key={item.id}>
        <Link to={`/posts/${item.id}`}>{item.title}</Link>
       </li>
      ))}
    </>
  )
}

export default PostsPage