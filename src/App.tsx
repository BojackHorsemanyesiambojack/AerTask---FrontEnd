import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import SignLayout from "./_auth/pages/SignLayout";
import LandingLayout from "./_presentation/LandingLayout";
import RootLayout from "./_root/RootLayout";
import Dashboard from "./_root/pages/Dashboard";
import Project from "./_root/pages/Projects/Project";
import ProjectCollaboratorsPage from "./_root/pages/Projects/ProjectCollaborators";
import ProjectGeneral from "./_root/pages/Projects/ProjectGeneral";
import Projects from "./_root/pages/Projects/Projects";
import ProjectTasksPage from "./_root/pages/Projects/ProjectTasks";
import ProjectConfig from "./_root/pages/Projects/ProjectConfig";

function App() {
  return (
    <Routes>
      <Route path="/" Component={LandingLayout} />
      <Route Component={AuthLayout} path="/auth">
        <Route Component={SignLayout} path="/auth/:route" />
      </Route>
      <Route Component={RootLayout} path="/root">
        <Route Component={Dashboard} path="/root/dashboard/:userId" />
        <Route Component={Projects} path="/root/user-projects/:userId" />
        <Route Component={Project} path="/root/project/:projectId">
          <Route
            Component={ProjectGeneral}
            path="/root/project/:projectId/general"
          />
          <Route Component={ProjectCollaboratorsPage}
          path="/root/project/:projectId/collaborators" />
          <Route Component={ProjectTasksPage} path="/root/project/:projectId/tasks" />
          <Route Component={ProjectConfig} path="/root/project/:projectId/configuration" />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
