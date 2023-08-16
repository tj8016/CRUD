import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'

export const UpdateUser = (props) => {
    const id = props.id;
    const name = props.name;
    const email = props.email;
    const {updateUser} = useContext(UserContext);
    const [updatedUser, setUpdatedUser] = useState({name:name, email:email})
    const navigate = useNavigate();

    function changeHandler(event) {
        const {name, value} = event.target;
        setUpdatedUser((prevData) => {
            return {
                ...prevData,
                [name] : value,
            }
        })
    }

    function updateHandler() {
        updateUser(id, updatedUser);
        navigate('/');
    }
  return (
    <div className='w-4/12 mx-auto'>
            <h1 className='text-center text-white text-xl'>Edit User</h1>
            <form onSubmit={updateHandler}>
                <div className="grid gap-6 mb-6">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Enter your Name"
                        name = 'name'
                        value={updatedUser.name}
                        onChange={changeHandler}
                        required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Enter your Email"
                        name = 'email'
                        value={updatedUser.email}
                        onChange={changeHandler}
                        required/>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                </div>
                    
                
            </form>

        </div>
  )
}
