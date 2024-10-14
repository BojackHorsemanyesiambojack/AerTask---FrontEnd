import { useState } from "react";
import Work from "../../../assets/icons/HeroIcons/Work";
import IconButton from "../../../shared/ui/components/buttons/IconButton";
import UserProjects from "../../../shared/ui/components/users/UserProjects";
import ProyectCreationForm from "../../../shared/ui/forms/ProyectCreationForm";

export default function Projects() {
  const [openCreationForm, setOpenCreationForm] = useState<boolean>(false);
  const [shouldRefresh, setShouldRefresh] = useState<boolean>(false)
  const handleOpenCreationForm = () => {
    setOpenCreationForm((prev) => !prev);
  };

  const handleRefresh = () => {
    setShouldRefresh(prev => !prev);
  }

  return (
    <section className=" p-6 w-full h-full flex flex-col text-start items-start">
      <h2 className="text-xl font-bold">Proyectos</h2>
      <IconButton
        onClick={handleOpenCreationForm}
        Icon={Work}
        Text={openCreationForm ? "Cancelar" : "Crear un proyecto"}
      />
      {openCreationForm && <ProyectCreationForm refresh={handleRefresh}/>}
      <div className="sm:w-auto w-full">
        <UserProjects Limit={null} refresh={shouldRefresh}/>
      </div>
    </section>
  );
}
