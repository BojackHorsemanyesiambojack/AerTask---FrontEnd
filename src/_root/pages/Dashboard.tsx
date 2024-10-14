import { useEffect, useState } from "react";
import { useUserContext } from "../../shared/context/UseAuthContext";
import Welcome from "../../shared/ui/components/others/Welcome";
import auth from "../../utils/auth/auth";
import { useParams } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";

export default function Dashboard() {
  const { user, isLoading, checkAuthUser, isAuthenticated } = useUserContext();

  const userId = useParams<{ userId: string }>();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isIniting, setIsIniting] = useState<boolean>(true);

  const initialCheck = async () => {
    if (userId.userId && !isLoading && isAuthenticated) {
      const result = await auth.CheckIsAuthorized(userId.userId, user.userId);
      if (result == true) {
        setIsAuthorized(true);
        setIsIniting(false);
      }
      setIsIniting(false)
    }
  };

  useEffect(() => {
    initialCheck();
  }, [isAuthenticated, user.userId, isLoading, userId.userId]);

  return (
    <section className="w-full h-full text-white flex flex-col items-center justify-evenly">
      {isIniting ? (
        <Hourglass />
      ) : (
        <>
          {isAuthorized ? (
            <>
              <Welcome userName={user.userName} />
              <div className="w-full border border-white"></div>
              <div className="flex items-center justify-evenly w-full">
              </div>
              <h3 className="text-xl font-bold">Tus Tareas</h3>
            </>
          ) : (
            <h2>Unauthorized</h2>
          )}
        </>
      )}
    </section>
  );
}
