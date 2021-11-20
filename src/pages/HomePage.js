import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import List from '../List.js';


export default function HomePage () {
    const { state, dispatch } = useContext(StateContext)
    const [ posts, getPosts ] = useResource(() => ({
        url: '/posts',
        method: 'get'
    }))

    useEffect(() =>{
        getPosts()
    }, [])

    useEffect(() => {
        if (posts && posts.isLoading === false && posts.data) {
            console.log(posts.data)
                dispatch({ type: 'FETCH_POSTS', posts: posts.data.posts })
            }
        }, [posts])
    const { data, isLoading } = posts;
    return (
        <>
          {isLoading && 'Posts loading...'} <List />
        </>
    )
} 