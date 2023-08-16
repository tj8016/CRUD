import React, { useContext , useState} from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md'
import { LuEdit } from 'react-icons/lu'
import ConfirmationModal from './common/ConfirmationModal';

export const User = ({ user }) => {
  const [confirmModal, setConfirmModal] = useState(null)
  const { deleteUser } = useContext(UserContext);
  const navigate = useNavigate();
  const name = user.name;
  const email = user.email;
  const id = user._id;

  function deleteHandler() {
    deleteUser(id);
    navigate('/')
  }
  
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th scope="row" className="px-6 py-4 flex items-center gap-x-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <img class="w-10 h-10 rounded-full" src={`https://api.dicebear.com/5.x/initials/svg?seed=${name}`} alt="Jese image"/>
        {name}
      </th>
      <td className="px-6 py-4">
        {email}
      </td>
      <td>
        <div className='flex gap-x-4'>
          <button onClick={() => {navigate(`/edituser/${id}`, {state : {name : name, email : email}})}} className='text-2xl text-[#2563eb]'><LuEdit></LuEdit></button>
          <button className='text-2xl text-red-500'
          onClick={() =>
            setConfirmModal({
              text1: "Are you sure ?",
              text2: "You want delete user",
              btn1Text: "Delete",
              btn2Text: "Cancel",
              btn1Handler: () => deleteHandler(),
              btn2Handler: () => setConfirmModal(null),
            })
          }
          ><MdDelete></MdDelete></button>
        </div>
      </td>
    </tr>

    {
      confirmModal && <ConfirmationModal modalData={confirmModal}></ConfirmationModal>
    }
    </>
  )
}
