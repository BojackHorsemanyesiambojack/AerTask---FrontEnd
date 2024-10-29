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
import VoidDeleteSession from "./_root/pages/VoidDeleteSession";
import Friends from "./_root/pages/Friends";
import PersonalTasks from "./_root/pages/PersonalTasks";
import ProjectMedia from "./_root/pages/Projects/ProjectMedia";
import ProjectHistorial from "./_root/pages/Projects/ProjectHistorial";
import ProjectTaskInfo from "./_root/pages/Projects/ProjectTaskInfo";

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
        <Route Component={VoidDeleteSession} path="/root/deletesession/:userId" />
        <Route Component={Friends} path="/root/friends/:userId" />
        <Route Component={PersonalTasks} path="/root/tasks/:userId" />
        <Route Component={Project} path="/root/project/:projectId">
          <Route
            Component={ProjectGeneral}
            path="/root/project/:projectId/general"
          />
          <Route Component={ProjectCollaboratorsPage}
          path="/root/project/:projectId/collaborators" />
          <Route Component={ProjectTasksPage} path="/root/project/:projectId/tasks">
          <Route Component={ProjectTaskInfo} path="/root/project/:projectId/tasks/:taskId" />
          </Route>
          <Route Component={ProjectConfig} path="/root/project/:projectId/configuration" />
          <Route Component={ProjectMedia} path="/root/project/:projectId/media" />
          <Route Component={ProjectHistorial} path="/root/project/:projectId/historial" />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
