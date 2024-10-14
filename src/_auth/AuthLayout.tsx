import { Toaster } from "react-hot-toast";
import { Outlet, useNavigate } from "react-router-dom";
import AerTaskLogo from "../assets/icons/AerTaskLogo.png";
import Bubble from "../shared/ui/decoration/Bubble";
import FloatElementsContainer from "../shared/ui/decoration/FloatElementsContainer";
import { useEffect } from "react";
import { useUserContext } from "../shared/context/UseAuthContext";

export default function AuthLayout() {
  const {user, checkAuthUser} = useUserContext();
  const navigate = useNavigate();
  const initialAuthCheck = async() => {
    const check = await checkAuthUser();
    check?
    navigate(`../root/dashboard/${user.userId}`)
    :
    null
  }
  useEffect(() => {
    initialAuthCheck();
  })
  return (
    <>
    <Toaster />
    <main className="principal-gradient h-screen w-screen text-white flex items-center justify-center flex-col">
      <div className="w-full h-3/4 flex flex-col items-center justify-center">
        <div className="flex items-center mb-4"> 
          <img
            src={AerTaskLogo}
            alt="AerTask Logo - Organiza tus tareas y proyectos"
            className="max-w-24 max-h-24"
          />
          <h1 className="text-4xl text-white font-bold ml-4"> {/* Agregué margen izquierdo para espaciar el título */}
            AerTask
          </h1>
        </div>
        <Outlet />
      </div>
    </main>
    <FloatElementsContainer>
        <Bubble left="10%" delay="0.3s"/>
        <Bubble left="90%" top="20%" delay="0.3s"/>
        <Bubble left="40%" top="10%" />
      </FloatElementsContainer>
    </>
  );
}

