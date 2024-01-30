import React from 'react'
import { useSelector } from 'react-redux'
import { action } from '../order/CreateOrder'

function Username() {
const username = useSelector(state=> state.user.username)
if (!username) return null;
  return (
    <div className='  text-sm font-semibold'>{username}</div>
  )
}

export default Username