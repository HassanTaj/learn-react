import React, { useEffect, useState } from 'react'

import axios from '../config/axios.client';
import { useParams } from 'react-router-dom';

async function getPostDetails(postId) {
    let response = await axios.get(`posts/${postId}`);
    return response.data;
}
async function getPostComents(postId) {
    let response = await axios.get(`posts/${postId}/comments`);
    return response.data;
}

function PostDetails() {
    var { id } = useParams()
    const [post, setPost] = useState({})
    const [postComents, setPostComents] = useState([])

    useEffect(() => {
        getPostDetails(id).then((response) => {
            setPost(response);
            getPostComents(id).then((response) => setPostComents(response));
        });
    }, [id]);

    return (
        <>
            <div className="col-12 p-2">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{post.title}</h4>
                        <p className="card-text">{post.body}</p>
                        <br />
                        <h4 className="card-title">Comments</h4>
                        <hr />
                        {postComents?.length == 0 && <p>No comments yet</p>}
                        {postComents?.map((coment, index) =>
                            <>
                                <div key={index} className='ps-4'>
                                    <strong>{coment?.name} ({coment.email})</strong>
                                    <p>{coment?.body}</p>
                                </div>
                                <hr />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetails
