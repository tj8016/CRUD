import React, { useContext, useEffect, useState } from 'react'
import { User } from '../components/User';
import { UserContext } from '../context/userContext'
import { AddUser } from '../components/AddUser';
import ConfirmationModal from '../components/common/ConfirmationModal'

export const HomePage = () => {
  const {users, getAllUsers } = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className='w-9/12  flex flex-col mx-auto py-[30px] gap-y-7'>
      {
        openModal && <AddUser setOpenModal = {setOpenModal}/>
      }

      <div className='flex justify-end'>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        onClick={() => setOpenModal(true)}>
          Add User
        </button>

      </div>
      <div className="relative overflow-x-auto  shadow-md sm:rounded-lg w-full h-[80%]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Student Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
              {
                users.map((user) => {
                  return <User user = {user} key={user._id}/>
                })
              }
          </tbody>
        </table>

      </div>

    </div>
  )
}
