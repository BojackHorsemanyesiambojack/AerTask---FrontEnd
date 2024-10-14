import { useNavigate } from "react-router-dom";

export default function CreateAccountCartel() {
  const navigate = useNavigate();
  return (
    <>
      <p className="text-gray-400">Aún no tienes una cuenta?</p>
      <a
        onClick={() => navigate("../sign-up")}
        className="font-bold text-blue-500 hover:cursor-pointer"
      >
        Crear una cuenta
      </a>
    </>
  );
}
