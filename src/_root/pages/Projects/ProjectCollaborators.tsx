import ProjectCollaborators from "../../../shared/ui/components/onProject/ProjectCollaborators";

export default function ProjectCollaboratorsPage() {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col w-1/2">
        <h2 className="text-xl font-bold mb-6">Colaboradores</h2>
        <ProjectCollaborators />
      </div>
    </section>
  );
}
