import {Routes, Route} from "react-router-dom"
import './App.css'

import Layout from './components/Layout.jsx'
import PostsPage from './components/PostsPage.jsx'
import Home from "./components/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import CreatePost from "./components/CreatePost.jsx"
import SinglePostApp from "./components/SinglePostApp.jsx"


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="posts" element={<PostsPage/>} />
          <Route path="create_post" element={<CreatePost/>} />
          <Route path="posts/:postId" element={<SinglePostApp/>} />
          <Route path="*" element={
          <div>
            <h2>404</h2>
            <h3>Not found</h3>
          </div>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App