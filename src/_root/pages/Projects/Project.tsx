import { Outlet } from "react-router-dom";
import TopNavBar from "../../../shared/ui/components/navigation/TopNavBar";
import ProjectUserProvider from "../../../shared/context/UseOnProjectContext";

export default function Project() {
  return (
    <ProjectUserProvider>
      <TopNavBar />
      <div className="p-6">
        <Outlet />
      </div>
    </ProjectUserProvider>
  );
}
