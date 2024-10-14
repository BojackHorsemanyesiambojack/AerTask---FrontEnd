import { Avatar } from "react-profile-avatar";
import { useUserContext } from "../../context/UseAuthContext";

export default function UserDisplayBox({className} : {className?:string}) {
  const {user} = useUserContext();
  return (
    <div className={`flex py-12 flex-col items-center ${className}`}>
      <Avatar initials={user.userName[0]} colour="gray" size={42} className="rounded-md text-center"/>
      <p className="text-lg font-bold">{user.userName}</p>
    </div>
  )
}
