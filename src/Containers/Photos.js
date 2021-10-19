import React, {useState, useEffect} from 'react'



export default function Photos() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3001/posts")
        .then(res => res.json())
        .then(setPosts)
    })
    return (
        <div>
            <h1>Photos</h1>
            {/* {posts[0] ? <img src={posts[0].photo_url}/> : <h2>Loading..</h2>} */}
        </div>
    )
}
