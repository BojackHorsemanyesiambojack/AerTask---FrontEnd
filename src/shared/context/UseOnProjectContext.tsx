import { createContext, useContext, useEffect, useState } from "react";
import { IContextOnProject } from "../../models/types/Context";
import { ProjectUser, voidProjectUser } from "../../models/types/Sesion";
import Projects from "../../utils/projects/Projects";
import { useUserContext } from "./UseAuthContext";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const INITIAL_STATE: IContextOnProject = {
  userInProject: voidProjectUser,
  isLoading: true,
  isChecked: false,
  setIsChecked: () => {},
  setUserInProject: () => {},
  checkUserContextInProject: async () => false as boolean,
};

const userContextOnProject = createContext<IContextOnProject>(INITIAL_STATE);

const ProjectUserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userInProject, setUserInProject] =
    useState<ProjectUser>(voidProjectUser);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { user, isAuthenticated, isLoading:isGetting } = useUserContext();
  const { projectId } = useParams<{ projectId: string }>();

  const checkUserContextInProject = async () => {
    setIsLoading(true);
    try {
      if (projectId && isAuthenticated && !isGetting) {
        const currentProjectUser = await Projects.checkUserInProject(
          projectId,
          user.userId.toString()
        );
        setUserInProject(currentProjectUser);
        return true;
      }
      setIsChecked(false);
      return false;
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, {
          position: "bottom-right",
        });
      }
      return false;
    } finally {
      setIsLoading(false);
      setIsChecked(true);
    }
  };

  useEffect(() => {
    checkUserContextInProject();
  }, [user.userId, projectId]);

  const values = {
    userInProject,
    isLoading,
    isChecked,
    setIsChecked,
    setUserInProject,
    checkUserContextInProject,
  };

  return (
    <userContextOnProject.Provider value={values}>
      {children}
    </userContextOnProject.Provider>
  );
};

export default ProjectUserProvider;
export const useUserInProjectContext = () => useContext(userContextOnProject); // Corregido