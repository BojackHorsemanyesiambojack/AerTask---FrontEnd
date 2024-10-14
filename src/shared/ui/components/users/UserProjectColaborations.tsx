import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Project } from "../../../../models/types/Project";
import Projects from "../../../../utils/projects/Projects";
import toast from "react-hot-toast";
import ProjectContainerInfo from "../../containers/ProjectContainerInfo";

export default function UserProjectColaborations({Limit, refresh} : {Limit:number, refresh?:boolean}) {
  const { userId } = useParams<{ userId: string }>();
  const [error, setError] = useState<string>("");
  const [projects, setProjects] = useState<Array<Project>>([]);

  const initialGet = async () => {
    try {
      if (userId) {
        const projectsGetted = await Projects.getProjectWhereUser (userId);
        if (projectsGetted) {
          const finalLimit = Limit == null ? projectsGetted.length : Limit;
          setProjects(projectsGetted.slice(0, finalLimit));
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    initialGet();
  }, [userId, refresh]);

  return (
    <div className="secondary-gradient border border-zinc-800 rounded-sm p-10 my-6 w-full">
      {projects.length === 0 ? (
        <p className="text-lg font-semibold">Sin Proyectos</p>
      ) : (
        <div className="flex flex-col gap-6">
          {projects.map((current: Project, index) => (
            <ProjectContainerInfo current={current} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
