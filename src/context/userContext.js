import { createContext, useState } from "react"
import { toast } from "react-hot-toast";

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const UserContext = createContext();

export default function CartContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [singleuser, setSingleUser] = useState({});
    const getAllUsers = async () => {
        const toastid = toast.loading("Loading...");
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/user/allusers`, {
            method : "GET",
            headers : {
                "Content-Type": "application/json",
                },
            });

            const data = await res.json();
            setUsers(data.data);
        } catch(error) {
            console.log(error);
        }
        setLoading(false);
        toast.dismiss(toastid);
    }

    const getSingleUser = async (id) => {
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/user/singleuser/${id}`, {
            method : "GET",
            headers : {
                "Content-Type": "application/json",
                },
            });

            const data = await res.json();
            setSingleUser(data.data);
        } catch(error) {
            console.log(error);
        }
        setLoading(false);
    }

    const createUser = async(data) => {
        setLoading(true);
        try {
            const saveUserResponce = await fetch(`${BASE_URL}/user/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...data }),
            })

            toast.success("User Added")
            getAllUsers();
        }
        catch(error) {
            console.log(error);
        }
        setLoading(false);
    }

    const updateUser = async(id,data) => {
        setLoading(true);
        try {
            const saveUserResponce = await fetch(`${BASE_URL}/user/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...data }),
            })
            getAllUsers();
            toast.success("User Updated")
        }
        catch(error) {
            console.log(error);
        }
        setLoading(false);
    }

    const deleteUser = async(id) => {
        try{
            const saveUserResponce = await fetch(`${BASE_URL}/user/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            getAllUsers();
            toast.success("User Deleted")
        }
        catch(error) {
            console.log(error);
        }
    }

    const value = {
        users,
        setUsers,
        getAllUsers,
        createUser,
        deleteUser,
        loading,
        setLoading,
        updateUser,
        getSingleUser,
        singleuser,
        setSingleUser
    }

    return <UserContext.Provider value={value} > 
        {children}
    </UserContext.Provider>
}