import { useNavigate } from "react-router-dom";
import AerTaskLogo from "../../../../assets/icons/AerTaskLogo.png";
import { IMenuMap } from "../../../../models/mapping/IMenuMap";
import UserDisplayBox from "../../auth/UserDisplayBox";
import { leftNavBarOptions } from "../../data/InterfacesMapping";
import { useUserContext } from "../../../context/UseAuthContext";

export default function LeftNavBar() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  return (
    <nav className="
      sm:h-screen sm:w-1/6 sm:flex-col sm:min-w-52
      w-full h-16 flex flex-row items-center justify-between
      bg-zinc-950 border-t border-neutral-900 sm:border-r sm:border-t-0 
      transition-all ease-in-out duration-300 z-10
      fixed bottom-0 left-0 sm:relative sm:bottom-auto sm:left-auto
      overflow-y-auto
    ">
      <div className="flex items-center sm:mb-4 ml-4 sm:ml-0">
        <img
          src={AerTaskLogo}
          alt="AerTask Logo - Organiza tus tareas y proyectos"
          className="max-w-16 max-h-16"
        />
        <h1 className="text-2xl text-white font-bold hidden sm:block">AerTask</h1>
      </div>
      <UserDisplayBox className="sm:w-32" />
      <div className="flex flex-row sm:flex-col justify-between w-full sm:w-auto h-full">
        {leftNavBarOptions.map((current: IMenuMap, index) => (
          <button
            key={index}
            className="hover:bg-slate-800 p-4 rounded-md transition-all flex items-center justify-center sm:justify-start"
            onClick={() => navigate(`${current.linkTo}/${user.userId}`)}
          >
            {current.icon}
            <p className="font-semibold text-md ml-1 hidden sm:block">
              {current.label}
            </p>
          </button>
        ))}
      </div>
    </nav>
  );
}
