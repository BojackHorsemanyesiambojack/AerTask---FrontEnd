import { useNavigate } from "react-router-dom";

export default function LoginCartel() {
  const navigate = useNavigate();
  return (
    <>
      <p className="text-gray-400">Ya tienes una cuenta?</p>
      <a
        onClick={() => navigate("../sign-in")}
        className="font-bold text-blue-500 hover:cursor-pointer"
      >
        Iniciar sesión
      </a>
    </>
  );
}
