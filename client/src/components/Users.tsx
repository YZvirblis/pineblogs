import React, { useEffect, useState } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import axios from "../api/axios"
import { useNavigate, useLocation } from 'react-router-dom'

const Users = () => {
    const [users, setUsers] = useState<any>()
    const axiosPrivate = useAxiosPrivate()

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axiosPrivate.get('/v1/users/allusers')
                setUsers(res.data)
            } catch (err: any) {
                console.error(`USERS ERROR: ${err}`)
                navigate('/login', {state:{ from: location}, replace: true})
            }
        }
        getUsers()
    }, [])
    
  return (
    <article>
        <h2>Users List</h2>
        {
            users?.length
                ? (
                    <ul>
                        {users.map((user: any, i: number) => {
                            return (
                                <li key={i} >{user?.username}</li>
                                )
                        })}
                    </ul>
                ) : <p>No users to display</p>
        }
    </article>
  )
}

export default Users