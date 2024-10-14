import ProjectConfigInfo from "../../../shared/ui/components/onProject/ProjectConfig-Info";

export default function ProjectConfig() {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col w-full">
        <h2 className="text-xl font-bold mb-6">Configuraciones</h2>
        <ProjectConfigInfo />
      </div>
    </section>
  );
}
