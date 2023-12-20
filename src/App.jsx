import {Routes, Route} from "react-router-dom"
import './App.css'

import Layout from './components/Layout.jsx'
import PostsPage from './components/PostsPage.jsx'
import Home from "./components/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import CreatePost from "./components/CreatePost.jsx"
import CreatePostPage from "./components/CreatedPostPage.jsx"


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="posts" element={<PostsPage/>} />
          <Route path="create_post" element={<CreatePost/>} />
          <Route path="ctreating_post_page/:postId" element={<CreatePostPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App