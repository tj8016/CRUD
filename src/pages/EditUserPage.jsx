import React from 'react'
import { UpdateUser } from '../components/UpdateUser'
import { useLocation, useParams } from 'react-router-dom'

export const EditUserPage = () => {
  const { id } = useParams();
  const location = useLocation();
  return (
    <div className='w-9/12  min-h-[calc(100vh-4.5rem)] flex flex-col items-center justify-center mx-auto py-[30px] gap-y-10'>
      <UpdateUser id = {id} name = {location.state.name} email = {location.state.email}></UpdateUser>
    </div>
  )
}

