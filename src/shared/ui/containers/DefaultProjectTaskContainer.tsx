import { projectTaskAndUser } from "../../../models/types/Project";
import DefaultColaboratorContainer from "./DefaultUserContainer";

export default function DefaultProjectTaskContainer({
  task,
}: {
  task: projectTaskAndUser;
}) {
  const getStatusStyle = () => {
    switch (task.task.projectTaskStatus) {
      case "complete":
        return "bg-green-500 text-white";
      case "cancelled":
        return "bg-red-500 text-white";
      case "active":
      default:
        return "bg-yellow-500 text-black";
    }
  };

  return (
    <div className="w-full min-h-32 p-4 rounded-md shadow-md border border-zinc-700 flex items-start justify-between">
      <div className="flex flex-col w-4/5">
        <h3 className="text-xl font-bold">{task.task.projectTaskName}</h3>
        <p className="mt-2 text-zinc-300">{task.task.projectTaskDescription}</p>
      </div>

      <div className="w-1/5 flex flex-col items-end h-full gap-3">
        <span className={`text-sm font-semibold px-2 py-1 rounded-md ${getStatusStyle()}`}>
          {task.task.projectTaskStatus}
        </span>
        
        <div className="mt-4">
          <DefaultColaboratorContainer user={task.profile} isColumn={true} />
        </div>
      </div>
    </div>
  );
}
