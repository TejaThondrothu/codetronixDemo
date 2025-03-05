import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPostId, setSelectedPostId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) throw new Error('Network response was not ok');
                const jsonData = await response.json();
                setPosts(jsonData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const handlePostClick = async (postId) => {
        if (selectedPostId === postId) {
            setSelectedPostId(null); // Collapse comments if clicked again
            return;
        }
        setSelectedPostId(postId);
        if (!comments[postId]) {
            try {
                setIsLoading(true);
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const jsonData = await response.json();
                setComments((prev) => ({ ...prev, [postId]: jsonData }));
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching comments:', error);
                setIsLoading(false);
            }
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Post & Comments Viewer</h1>
            {isLoading && <Loader/>}
            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="border p-5 rounded-lg shadow-lg bg-white">
                        <h2 
                            className="text-xl font-semibold cursor-pointer text-blue-600 hover:underline"
                            onClick={() => handlePostClick(post.id)}
                        >
                            {post.title}
                        </h2>
                        <p className="text-gray-700">{post.body}</p>
                        {selectedPostId === post.id && comments[post.id] && (
                            <div className="mt-3 p-4 bg-gray-100 rounded-lg">
                                <h3 className="font-semibold">Comments:</h3>
                                <ul className="list-disc ml-4">
                                    {comments[post.id].map((comment) => (
                                        <li key={comment.id} className="text-gray-800 border-b py-2">
                                            {comment.body}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Post;
