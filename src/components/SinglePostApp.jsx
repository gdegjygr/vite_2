import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";

const SinglePostApp  = () => {
    const {postId} = useParams()
    const [getPost, setGetPost] = useState({})

    useEffect(() => {
      const request = async () => {
        const response = await axios.get(`https://dummyjson.com/posts/${postId}`)
        setGetPost(response.data)
      }
      request()
    }, [])


    const navigate = useNavigate()
    const btnClick = () => {
      navigate('/')
    }

  return (
    <div>
        <h1>You read {`${getPost.id} post`}</h1>
        <p>{getPost.title}</p>
        <button onClick={btnClick}>HOME</button>
    </div>
  )
}

export default SinglePostApp 