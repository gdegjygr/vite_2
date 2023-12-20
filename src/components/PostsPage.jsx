import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PostsPage = () => {
const [posts, setPosts] = useState([])

    useEffect(() => {
        const request = async () => {
            const responce = await axios.get('https://dummyjson.com/posts')
            setPosts(responce.data.posts)
        }
        request()
    }, [])

  return (
    <>
      <h1>Posts:</h1>
      {posts.map((item) => (
       <div>
            <h2>{item.title}</h2>
            <span>{item.body}</span>
            <p>{item.userId} - user id</p>
       </div>
      ))}
    </>
  )
}

export default PostsPage