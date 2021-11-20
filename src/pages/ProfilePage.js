import React, { useEffect, useContext } from 'react'
import { useResource } from 'react-request-hook'

import { StateContext } from '../Contexts'
import List from '../List';

export default function ProfilePage({id}) {

    const {state, dispatch} = useContext(StateContext);

    const [ userPost, getUserPost ] = useResource(() => ({
        url: `/users/${id}`,
        method: 'get'
    }))

    useEffect(getUserPost, [])

    useEffect(() => {
        if (userPost && userPost.isLoading === false && userPost.data) {
                dispatch({ type: 'FETCH_POSTS', posts: userPost.data})
            }
        }, [userPost.data])

    return (
        <div>
            <List />
        </div>
    )
}
