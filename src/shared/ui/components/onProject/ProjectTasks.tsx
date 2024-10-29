import { useEffect, useState } from "react";
import {
  projectTask,
  projectTaskAndUser,
} from "../../../../models/types/Project";
import { useParams } from "react-router-dom";
import Tasks from "../../../../utils/tasks/Tasks";
import toast from "react-hot-toast";
import { useUserInProjectContext } from "../../../context/UseOnProjectContext";
import IconButton from "../buttons/IconButton";
import Add from "../../../../assets/icons/HeroIcons/Add";
import AddTaskForm from "../../forms/AddTaskForm";
import Cancel from "../../../../assets/icons/HeroIcons/Cancel";
import DefaultProjectTaskContainer from "../../containers/DefaultProjectTaskContainer";
import LoadingScreen from "../../containers/LoadingScreen";

export default function ProjectTasks() {
  const [projectTasks, setProjectTasks] = useState<Array<projectTaskAndUser>>(
    []
  );
  const projectId = useParams<{ projectId: string }>();
  const { userInProject } = useUserInProjectContext();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleOpenForm = () => {
    setOpenForm((prev) => !prev);
  };

  const getProjectTasks = async () => {
    try {
      if (projectId.projectId) {
        const projectList = await Tasks.getProjectTasks(projectId.projectId);

        setProjectTasks(projectList);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, {
          position: "bottom-right",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userInProject) {
      setIsAdmin(
        userInProject.userRole === "admin" ||
          userInProject.userRole === "creator"
      );
    }
    getProjectTasks();
  }, [projectId.projectId, userInProject, refresh]);

  return (
    <section className="w-full">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {isAdmin && (
            <IconButton
              Icon={openForm ? Cancel : Add}
              Text={openForm ? "Cancelar" : "Agregar Tarea"}
              onClick={handleOpenForm}
            />
          )}
          {openForm && <AddTaskForm refresh={setRefresh} />}
          <div className="principal-gradient p-3 rounded-md border border-zinc-700">
            {projectTasks.length == 0 ? (
              <h3 className="text-lg font-bold">
                El proyecto actual no tiene tareas.
              </h3>
            ) : (
              <div className="gap-3 flex flex-col">
                {projectTasks.map((task: projectTaskAndUser, index) => (
                  <DefaultProjectTaskContainer task={task} key={index} />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
}
