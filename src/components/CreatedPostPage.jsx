import { useNavigate, useParams } from "react-router-dom"; 
import React, {useState, useEffect} from "react";
import axios from "axios";

const LoginPage = () => { 
    const [posts, setPosts] = useState([])
    const {postId} = useParams()

    const navigate = useNavigate(); 
    const submitHome = (e) => {
        e.preventDefault()
        navigate("/")
    }

    useEffect(() => {
        const getPostRequest = async () => {
            const response = await axios.get(`https://dummyjson.com/posts/add${postId}`)
            setPosts(response.data)
            alert(posts)
        }
        getPostRequest()
    }, [])

  return ( 
    <>
    <form onSubmit={submitHome}>
        <button type="submit">Out?</button>
    </form>
      {posts.map((item) => (
        <div>
            <div value={item.title}></div>
            <div value={item.body}></div>
        </div>
      ))}
    </>
  ); 
}; 
export default LoginPage;