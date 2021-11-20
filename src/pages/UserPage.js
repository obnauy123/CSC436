import React, { useEffect, useContext } from 'react'
import { useResource } from 'react-request-hook'

import { StateContext } from '../Contexts'
import UserList from '../UserList'

export default function UserPage() {

    const {state, dispatch} = useContext(StateContext);

    const [ users, getUsers ] = useResource(() => ({
        url: '/users',
        method: 'get'
    }))

    useEffect(getUsers, [])

    useEffect(() => {
        if (users && users.isLoading === false && users.data) {
            console.log(users.data)
                dispatch({ type: 'SHOW', accounts: users.data['users'] })
            }
        }, [users.data])

    return (
        <div>
            <UserList />
        </div>
    )
}
