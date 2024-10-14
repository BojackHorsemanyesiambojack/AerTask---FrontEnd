import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { User, voidUser } from "../../../models/types/Sesion";
import auth from "../../../utils/auth/auth";
import DefaultColaboratorContainer from "./DefaultUserContainer";

export default function ModalUserContainer({userId} : {userId:string}) {
    const [user, setUser] = useState<User>(voidUser);

    const getUser = async() => {
        try{
            const userList = await auth.GetDefaultUser(userId);
            setUser(userList);
        }catch(error){
            if(error instanceof Error){
                toast.error(error.message, {
                    position:'bottom-right'
                })
            }
        }
    }

    useEffect(() => {
        getUser();
    },[user])

  return (
    <>
    <DefaultColaboratorContainer user={user}isColumn={true} AvatarWidth={55} />
    </>
  )
}
