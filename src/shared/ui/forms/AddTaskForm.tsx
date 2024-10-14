import { SetStateAction, useState } from "react";
import { taskPostFormMapping } from "../../../models/mapping/FormsMap";
import Form from "../components/Form";
import {
  createProjectTask,
  voidCreateProjectTask,
} from "../../../models/interfaces/Inputs/CreateProjectTask";
import { useUserContext } from "../../context/UseAuthContext";
import { useParams } from "react-router-dom";
import Tasks from "../../../utils/tasks/Tasks";
import toast from "react-hot-toast";

export default function AddTaskForm({
  refresh,
}: {
  refresh: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [formData, setFormData] = useState<createProjectTask>(
    voidCreateProjectTask
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { user } = useUserContext();
  const { projectId } = useParams<{ projectId: string }>();

  const handleSubmit = async (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      if (projectId) {
        formData.userId = user.userId;
        formData.projectId = projectId;
        await Tasks.createNewProjectTask(formData);
        refresh((prev) => !prev);
        toast.success("Tarea agregada con exito", {
          position: "bottom-right",
        });
        setFormData(voidCreateProjectTask)
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, {
          position: "bottom-right",
        });
      }
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="w-1/2 mb-3">
      <Form
        Map={taskPostFormMapping}
        Action="POST"
        SubmitText="Crear tarea"
        OnSubmit={handleSubmit}
        HandleChange={handleChange}
        Values={formData}
        isLoading={isLoading}
        GenError={error}
        InputBG="#27272a"
        SubmitColor="overlay-gradient"
        SubmitTextColor="white"
        GenTextStyle="font-semibold"
      />
    </div>
  );
}
