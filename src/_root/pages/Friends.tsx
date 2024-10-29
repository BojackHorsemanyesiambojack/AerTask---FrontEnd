import Person from "../../assets/icons/HeroIcons/Person";
import IconButton from "../../shared/ui/components/buttons/IconButton";
import UserFriends from "../../shared/ui/components/users/UserFriends";
import UserSearch from "../../shared/ui/components/users/UserSearch";

export default function Friends() {
  return (
    <section className=" p-6 w-full h-full flex flex-col text-start items-start">
      <h2 className="text-xl font-bold">Proyectos</h2>
      <div className="flex w-2/3 items-center">
      <div className="w-1/2">
      <IconButton
        onClick={() => {}}
        Icon={Person}
        Text={"Agregar amigos"}
      />
      </div>
      <div className="max-h-12">
      <UserSearch />
      </div>
      </div>
    </section>
  );
}
