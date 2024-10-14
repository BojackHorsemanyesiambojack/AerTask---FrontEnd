import ProjectTasks from "../../../shared/ui/components/onProject/ProjectTasks"

export default function ProjectTasksPage() {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold mb-6">Tareas</h2>
        <ProjectTasks />
      </div>
    </section>
  )
}
