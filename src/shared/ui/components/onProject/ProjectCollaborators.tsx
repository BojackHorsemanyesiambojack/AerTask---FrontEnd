import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Add from "../../../../assets/icons/HeroIcons/Add";
import Cancel from "../../../../assets/icons/HeroIcons/Cancel";
import { ProjectUser } from "../../../../models/types/Sesion";
import Projects from "../../../../utils/projects/Projects";
import IconButton from "../buttons/IconButton";
import DefaultColaboratorContainer from "../../containers/DefaultUserContainer";
import AddColaboratorForm from "../../forms/AddColaboratorForm";
import { useUserInProjectContext } from "../../../context/UseOnProjectContext";

export default function ProjectCollaborators() {
  const [users, setUsers] = useState<Array<ProjectUser>>([]);
  const [openForm, setOpenForm] = useState<boolean>(false);
  const projectData = useParams<{ projectId: string }>();
  const [isProjectAdmin, setIsProjectAdmin] = useState<boolean>(false);
  const { userInProject } = useUserInProjectContext();

  const handleForm = () => {
    setOpenForm(prev => !prev)
  }

  const getUsers = async (): Promise<void> => {
    try {
      if (projectData.projectId) {
        const result = await Projects.getProjectUsers(projectData.projectId);
        console.log(result);
        setUsers(result);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, [projectData.projectId]);

  useEffect(() => {
    setIsProjectAdmin(userInProject.userRole == 'creator' || userInProject.userRole == 'admin');
  }, [users, userInProject.userId]);

  return (
    <div className="w-full h-full">
      <div className="flex w-full h-full">
      {isProjectAdmin && (
        <IconButton
          Icon={openForm? Cancel : Add}
          Text={openForm? "Cancelar" : "Agregar Colaboradores"}
          onClick={handleForm}
        />
      )}
      </div>
      {openForm && <AddColaboratorForm />}
      <div className="secondary-gradient w-full p-4 overflow-auto max-h-32 rounded-md mt-2">
      {users.map((current: ProjectUser) => (
        <div key={current.userId} className="flex flex-col w-full">
          <DefaultColaboratorContainer user={current}  ShowConfigIcon  />
        </div>
      ))}
      </div>
    </div>
  );
}
