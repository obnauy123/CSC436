import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import List from '../List.js';


export default function AfterLoginPage ({id}) {

    const { state, dispatch } = useContext(StateContext)
    const [ posts, getPosts ] = useResource(() => ({
        url: `/user/${id}`,
        method: 'get',
        headers: {"Authorization": `${state.user.access_token}`}
    }))
    const { data, isLoading } = posts;
    useEffect(() =>{
        getPosts()
    }, [])

    useEffect(() => {
        if (posts && posts.isLoading === false && posts.data) {
            console.log(posts.data)
                dispatch({ type: 'FETCH_POSTS', posts: posts.data.posts })
            }
        }, [posts])
    
    return (
        <>
          {isLoading && 'Posts loading...'} <List />
        </>
    )
} 