import React, { useContext } from 'react'
import { UserContext } from './UserContext'

//useContext
export const Component1 = () => {
    const user=useContext(UserContext)
  return (
    <div>
        <h1>{`Hi ${user}`}</h1>

        </div>
  )
}
