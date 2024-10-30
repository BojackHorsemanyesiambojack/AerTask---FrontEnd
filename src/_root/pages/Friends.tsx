import { useState } from "react";
import Person from "../../assets/icons/HeroIcons/Person";
import IconButton from "../../shared/ui/components/buttons/IconButton";
import UserSearch from "../../shared/ui/components/users/UserSearch";
import Cancel from "../../assets/icons/HeroIcons/Cancel";

export default function Friends() {
  const [openForm, setOpenForm] = useState<boolean>(false);
  return (
    <section className="p-6 w-full h-full flex flex-col text-start items-start">
      <h2 className="text-xl font-bold">Proyectos</h2>
      <IconButton
        onClick={() => {setOpenForm(prev => !prev)}}
        Icon={openForm? Cancel : Person}
        Text={openForm ? "Cancelar" : "Agregar Amigos"}
      />
      <div className="w-full h-1/6">
      {openForm && <UserSearch />}
      </div>
    </section>
  );
}
