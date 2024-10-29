import { Hourglass } from "react-loader-spinner";

export default function LoadingScreen() {
  return (
    <div className="flex justify-center items-center">
      <Hourglass width={25} height={25} />
      <h5 className="ml-3">Cargando informacion...</h5>
    </div>
  );
}
