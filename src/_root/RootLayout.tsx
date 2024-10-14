import { Toaster } from "react-hot-toast";
import { Outlet, useNavigate } from "react-router-dom";
import LeftNavBar from "../shared/ui/components/navigation/LeftNavBar";
import { useEffect } from "react";
import { useUserContext } from "../shared/context/UseAuthContext";

export default function RootLayout() {
  const { checkAuthUser } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    const initialCheck = async () => {
      const check = await checkAuthUser();
      if(!check){
        navigate('/')
      }
    };
    initialCheck();
  }, []);
    
  
  return (
    <main className="h-screen w-screen principal-gradient text-white flex">
      <Toaster />
      <LeftNavBar />
      <div className="overflow-auto w-full h-screen">
        <Outlet />
      </div>
    </main>
  );
}