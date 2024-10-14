import { useEffect, useState } from "react";
import { exampleProject, Project } from "../../../../models/types/Project";
import Projects from "../../../../utils/projects/Projects";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import IconButton from "../buttons/IconButton";
import EditIcon from "../../../../assets/icons/HeroIcons/EditIcon";

export default function ProjectConfigInfo() {
  const [projectData, setProjectData] = useState<Project>(exampleProject);
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const { projectId } = useParams<{ projectId: string }>();
  const [initial, setInitialState] = useState<{
    title: string;
    desc: string | undefined;
  }>({
    title: "",
    desc: "",
  });

  const getInitialProject = async () => {
    try {
      if (projectId) {
        const project: Project = await Projects.getDefaultProject(projectId);
        setProjectData(project);
        setInitialState({
          title: project.projectName,
          desc: project.projectDescription,
        });
      }
    } catch (error) {
      error instanceof Error && toast.error(error.message);
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDescription = e.target.value;
    setProjectData((prevData) => {
      const isChanged = newDescription !== initial.desc;
      setIsChanged(isChanged);
      return { ...prevData, projectDescription: newDescription };
    });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setProjectData((prevData) => {
      const isChanged = newTitle !== initial.title;
      setIsChanged(isChanged);
      return { ...prevData, projectName: newTitle };
    });
  };

  useEffect(() => {
    getInitialProject();
  }, []);

  return (
    <>
      <h3 className="text-lg font-bold">Información del proyecto</h3>
      <form className="w-3/4 rounded-md p-3 principal-gradient flex items-center justify-evenly border border-zinc-600 flex-col">
        <div className="flex w-full justify-evenly">
          <div className="flex flex-col items-center">
            <h4 className="text-md font-bold">Título</h4>
            <input
              value={projectData.projectName}
              onChange={handleTitleChange}
              className="bg-zinc-800 rounded-md p-2 text-sm font-semibold"
            />
          </div>
          <div className="flex flex-col items-center w-2/4">
            <h4 className="text-md font-bold">Descripción</h4>
            <textarea
              className="bg-zinc-800 rounded-md p-2 text-sm font-semibold w-full resize-none"
              value={projectData.projectDescription}
              rows={5}
              cols={50}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>{" "}
        <IconButton
          Type="submit"
          Icon={EditIcon}
          Text="Actualizar Proyecto"
          onClick={() => {}}
          disabled={!isChanged}
        />
      </form>
    </>
  );
}
