import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Hourglass } from "react-loader-spinner";
import { User } from "../../../../models/types/Sesion";
import auth from "../../../../utils/auth/auth";
import DefaultColaboratorContainer from "../../containers/DefaultUserContainer";
import LoadingScreen from "../../containers/LoadingScreen";

export default function UserSearch({ setValue }: { setValue?: Function }) {
  const [query, setQuery] = useState<string>("");
  const [users, setUsers] = useState<Array<User>>([]);
  const [onQuery, setOnQuery] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUsersByQuery = async () => {
    try {
      setIsLoading(true);
      const usersQuery = await auth.GetUserSearch(query, 5);
      setUsers(usersQuery);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim().length >= 3) {
        setOnQuery(true);
        getUsersByQuery();
      } else {
        setOnQuery(false);
        setUsers([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full h-1/2 rounded-md p-2 flex items-center justify-center flex-col">
      <input
        type="text"
        className="bg-zinc-900 rounded-md p-1 font-semibold w-full"
        value={query}
        onChange={handleChange}
        placeholder="Buscar usuario"
      />
      <div className="flex flex-col w-full justify-start">
        {isLoading ? (
          <LoadingScreen />
        ) : users.length === 0 && onQuery ? (
          <div className="my-2">
            <h5 className="text-zinc-600">
              No se han encontrado usuarios que coincidan con la búsqueda
            </h5>
          </div>
        ) : (
          <div className="max-h-32 overflow-y-auto overflow-x-hidden">
            {users.map((current: User) => (
              <div
                onClick={setValue ? () => setValue(current.userId) : () => {}}
              >
                <DefaultColaboratorContainer
                  user={current}
                  key={current.userId}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
