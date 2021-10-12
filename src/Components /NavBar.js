import React from 'react'
import {NavLink }from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <NavLink to="/home">Home</NavLink><br></br>
            <NavLink to="/uploads">Upload</NavLink><br></br>
            <NavLink to="/posts">Posts</NavLink>

        </div>
    )
}
