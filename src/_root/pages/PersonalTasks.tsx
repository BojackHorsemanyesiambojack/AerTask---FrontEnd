import Add from "../../assets/icons/HeroIcons/Add";
import IconButton from "../../shared/ui/components/buttons/IconButton";

export default function PersonalTasks() {
  return (
    <section className=" p-6 w-full h-full flex flex-col text-start items-start">
      <h2 className="text-xl font-bold">Tus tareas</h2>
      <div className="flex w-2/3 items-center">
      <div className="w-1/2">
      <IconButton
        onClick={() => {}}
        Icon={Add}
        Text={"Agregar tarea"}
      />
      </div>
      <div className="max-h-12">
      </div>
      </div>
    </section>
  )
}
