import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import {MdClose} from 'react-icons/md'

export const AddUser = ({setOpenModal}) => {
    const {createUser, loading} = useContext(UserContext);
    const [newUser, setNewUser] = useState({name:"", email:""})
    const navigate = useNavigate();

    function changeHandler(event) {
        const {name, value} = event.target;
        setNewUser((prevData) => {
            return {
                ...prevData,
                [name] : value,
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        setNewUser({name: "", email : ""});
        createUser(newUser);
        setOpenModal(false);
    }

    return (
        <div className='fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'>
            
            <div className='bg-[#111827] relative h-max-content w-4/12 py-10 rounded-md border border-[#0915328b]'>
                <button className='absolute text-white top-5 right-7 cursor-pointer h-3 w-3 text-xl'
                    onClick={() => setOpenModal(false)}
                >
                    <MdClose/>
                </button>
                <h1 className='text-white text-center text-xl'>Add User</h1>
                <form onSubmit={submitHandler} >
                    <div className="w-11/12 flex flex-col gap-y-5 mx-auto">
                        <div>
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" id="name" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Enter your Name"
                            name = 'name'
                            value={newUser.name}
                            onChange={changeHandler}
                            required/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" id="email" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Enter your Email"
                            name = 'email'
                            value={newUser.email}
                            onChange={changeHandler}
                            required/>
                        </div>

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {
                            loading ? (<p>Loading...</p>) : (<p>Add User</p>)
                        }
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}
