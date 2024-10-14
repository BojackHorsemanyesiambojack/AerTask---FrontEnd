import { useEffect, useState } from "react";
import ProjectCollaborators from "../../../shared/ui/components/onProject/ProjectCollaborators";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Projects from "../../../utils/projects/Projects";
import { exampleProject, Project } from "../../../models/types/Project";
import { Hourglass } from "react-loader-spinner";

export default function ProjectGeneral() {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project>(exampleProject);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projectLoaded, setProjectLoaded] = useState<boolean>(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      if (projectId) {
        const projectData = await Projects.getDefaultProject(projectId);
        setProject(projectData);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
      setProjectLoaded(true);
    }
  };

  useEffect(() => {
    getData();
  }, [projectId]);

  return (
    <section className="w-full h-full flex">
      {isLoading ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Hourglass />
          <h2 className="text-2xl font-bold">Cargando información...</h2>
        </div>
      ) : (
        <>
          <div className="flex flex-col w-1/2">
            <h2 className="text-xl font-bold mb-6">{project.projectName}</h2>
            <div className="w-full">
              <div className="w-full h-auto min-h-52 justify-between">
                <p className="w-4/5 text-sm">{project.projectDescription}</p>
              </div>
              <div className="w-1/2 max-h-48">
                <h3 className="text-md font-bold">Colaboradores</h3>
                {projectLoaded && <ProjectCollaborators />}
              </div>
            </div>
          </div>
          <h2 className="text-md font-bold mb-6">Media</h2>
        </>
      )}
    </section>
  );
}
