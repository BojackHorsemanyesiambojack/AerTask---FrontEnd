import { useNavigate } from "react-router-dom";
import AerTaskLogo from "../assets/icons/AerTaskLogo.png";
import Paper from "../shared/ui/containers/Paper";
import Bubble from "../shared/ui/decoration/Bubble";
import FloatElementsContainer from "../shared/ui/decoration/FloatElementsContainer";
import FAButton from "../shared/ui/components/buttons/FAButton";

export default function LandingLayout() {
  const navigate = useNavigate();

  const redirect = () => {navigate('/auth/sign-up')}

  return (
    <main className="flex w-screen h-screen items-center justify-center relative overflow-hidden">
      <div className="w-full h-full principal-gradient flex items-center justify-evenly relative">
        <section className="flex w-full flex-col items-center text-center relative z-10">
          <div className="flex flex-col items-center">
            <img 
              src={AerTaskLogo} 
              alt="AerTask Logo - Organiza tus tareas y proyectos" 
              className="max-w-24 max-h-24" 
            />
            <h1 className="text-4xl text-white font-bold">AerTask</h1>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold">
              Organiza tus tareas y proyectos de forma intuitiva y efectiva.
            </h2>
          </div>
          <div className="mt-6">
            <FAButton onClick = {redirect}>¡Empieza Gratis Hoy!</FAButton>
          </div>
        </section>

        <FloatElementsContainer>
          <Bubble top="20%" left="30%" />
          <Bubble top="40%" left="10%" />
          <Bubble top="85%" left="66%" />
          <Bubble top="25%" left="96%" />
        </FloatElementsContainer>

        <section className="flex flex-col items-center mt-10 mr-5">
          <h3 className="text-2xl text-white font-semibold mb-4">
            Características Clave
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Paper
              Title="Organización Intuitiva"
              Description="Clasifica y organiza tus tareas con facilidad usando listas y etiquetas."
            />
            <Paper
              Title="Colaboración en Tiempo Real"
              Description="Comparte proyectos y trabaja en equipo sin problemas."
            />
            <Paper
              Title="Recordatorios Inteligentes"
              Description="No olvides tus tareas con nuestros recordatorios y notificaciones."
            />
          </div>
        </section>
      </div>
    </main>
  );
}