import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to={"/ctreating_post_page"}>Creating post page</NavLink>
            </li>
            <li>
                <NavLink to={"/create_post"}>Create post</NavLink>
            </li>
            <li>
                <NavLink to={"/posts"}>Watch posts</NavLink>
            </li>
            <li>
                <NavLink to={"/"}>Go back</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar