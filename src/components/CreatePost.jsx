import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreatePost = () => {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [id, setId] = useState('')


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    };
    const handleUserChange = (e) => {
        setId(e.target.value)
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Создаем объект с данными для поста
        const postData = {
            title: title,
            body: body,
            userId: 1,
        };
    
        try {
            // Отправляем данные на сервер
            const response = await axios.post('https://dummyjson.com/posts/add', postData);
            setPosts('Post created:', response.data.posts)
            alert("Post requesting");
        } catch (error) {
            console.warn('post 400:', error);
        }  
    };

    return (
        <div>
            <h2>Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={handleTitleChange} />
                </label>
                <br />
                <label>
                    Body:
                    <textarea value={body} onChange={handleBodyChange} />
                </label>
                <label>
                    UserID:
                    <input type="text" value={id} onChange={handleUserChange} placeholder='enter post ID'/>
                </label>
                <br />
                <button type="submit">+</button>
            </form>
        </div>
    );
};

export default CreatePost;


