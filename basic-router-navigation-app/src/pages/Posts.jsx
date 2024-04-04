import React, { useEffect, useState } from 'react'
import axios from '../config/axios.client';
import { Link } from 'react-router-dom';

async function getPosts() {
    let response = await axios.get('posts');
    return response.data;
}
function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then((response) => setPosts(response));
    }, []);
    return (
        <>
            <div className='row'>
                {posts?.length == 0 && <span>Loading...</span>}
                {posts?.map((item, index) =>
                    <Link className="col-2 p-2" to={`/posts/${item.id}`}>
                        <div className="card" key={index}>
                            <div className="card-body">
                                <h4 className="card-title">{item.id}</h4>
                                <p className="card-text">{item.title}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </>
    )
}

export default Posts
