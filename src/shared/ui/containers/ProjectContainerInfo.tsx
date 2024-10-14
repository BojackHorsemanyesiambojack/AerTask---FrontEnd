import { useNavigate } from "react-router-dom";
import { Project } from "../../../models/types/Project";
import { checkDesc } from "../../../utils/text/textSubstrings";
import { formatDate } from "../../../utils/text/dates";

export default function ProjectContainerInfo({
  current,
  index,
}: {
  current: Project;
  index: number;
}) {
  const navigate = useNavigate();

  return (
    <div
      className="flex sm:flex-row truncate bg-zinc-900 items-start w-full justify-between p-6 rounded-lg border border-zinc-800
      hover:cursor-pointer flex-col"
      key={index}
      onClick={() => navigate(`/root/project/${current.projectId}/general`)}
    >
      <h4 className="text-lg font-bold">{current.projectName}</h4>
      <div className="flex flex-col ml-3">
        <p className="w-48 h-auto overflow-hidden whitespace-normal">
          {checkDesc(current.projectDescription)}
        </p>
        <p className="text-sm text-gray-600">
          {formatDate(new Date(current.createdAt))}
        </p>
      </div>
    </div>
  );
}
