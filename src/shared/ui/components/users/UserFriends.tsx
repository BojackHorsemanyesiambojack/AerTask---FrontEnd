import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../../context/UseAuthContext";
import auth from "../../../../utils/auth/auth";
import toast from "react-hot-toast";
import IconButton from "../buttons/IconButton";
import Person from "../../../../assets/icons/HeroIcons/Person";
import UserSearch from "./UserSearch";

export default function UserFriends() {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [openSearcher, setOpenSearcher] = useState<boolean>(false);
  const { userId } = useParams<{ userId: string }>();
  const { user } = useUserContext();
  const checkIsAuthorized = async () => {
    try {
      if (userId) {
        const check = await auth.CheckIsAuthorized(userId, user.userId);
        setIsAuthorized(check);
      }
    } catch (error) {
      error instanceof Error &&
        toast.error(error.message, {
          position: "bottom-right",
        });
    }
  };

  useEffect(() => {
    checkIsAuthorized();
  }, []);
  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full">
        <IconButton
          Icon={Person}
          Text="Agregar amigo"
          onClick={() => {
            setOpenSearcher((prev) => !prev);
          }}
        />
      </div>
      {openSearcher && <UserSearch />}
    </div>
  );
}
