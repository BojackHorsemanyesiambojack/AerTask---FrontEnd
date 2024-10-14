import { useState } from "react";
import toast from "react-hot-toast";
import { ProyectCreationData, voidProyectCreation } from "../../../models/interfaces/Inputs/PostCreationData";
import { createProjectForm } from "../../../models/mapping/FormsMap";
import Projects from "../../../utils/projects/Projects";
import { useUserContext } from "../../context/UseAuthContext";
import Form from "../components/Form";

export default function ProyectCreationForm({refresh} : {refresh:() => void}) {
    const {user} = useUserContext();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [postData, setPostData] = useState<ProyectCreationData>(voidProyectCreation);
    const [error, setError] = useState<string>('')

    const handleSubmit = async() => {
      event?.preventDefault();
      setIsLoading(true);
      postData.userId = user.userId;
      postData.projectPrivacity = postData.projectPrivacity.toLowerCase();
      try{
        const result = await Projects.createNewProject(postData);
        if(result){
          setPostData(voidProyectCreation);
          toast.success('Proyecto creado con exito',{
            position:'bottom-right'
          })
        }
      }catch(error){
        if(error instanceof Error){
          toast.error(error.message);
        }
      }finally{
        setIsLoading(false)
        refresh();
      }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setPostData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  return (
    <div className="w-1/2">
        <Form Map={createProjectForm} SubmitText="Crear proyecto" OnSubmit={handleSubmit} Action="POST"
        HandleChange={handleChange} isLoading={isLoading} Values={postData} Display="col" Width="full"
        Height="full" GenError={error} InputBG="#27272a" SubmitColor="overlay-gradient" SubmitTextColor="white"
        GenTextStyle="font-semibold"
        />
    </div>
  )
}
