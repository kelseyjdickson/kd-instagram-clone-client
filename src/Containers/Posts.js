import React, {useState, useEffect} from 'react'



export default function Photos() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3001/posts")
        .then(res => res.json())
        .then(setPosts)
    },[])
    console.log(posts)

    let displayInfo = posts.map((post) => {
        return(

        <ul>
            <img src={post.photo_url} alt="post"></img>
            <li key={post.id}>{post.caption}</li>
            <p>{post.likes}❤️</p>
        </ul>
        )


    }
    )
    
    return (
        <div>
            <h1>Photos</h1>
            {displayInfo}
            {/* {posts[0] ? {displayInfo} : <h2>Loading..</h2>} */}
        </div>
    )
}
