import { ProyectCreationData } from "../../models/interfaces/Inputs/PostCreationData";
import { Project } from "../../models/types/Project";
import fetches from "../api/fetches";
import routes from "../api/routes";
import { parseGetUrl } from "../text/parseGetUrl";

const getUserProjects = async (userId: string) => {
  try {
    const result: Promise<Array<Project>> =
      await fetches.defaultGetWithCredentials(
        routes.getUserProjectsRoute,
        userId
      );

    return result;
  } catch (error) {
    throw error;
  }
};

const createNewProject = async (project: ProyectCreationData) => {
  try {
    const result = await fetches.defaultPostWithCredentials(
      project,
      routes.CreateProjectRoute
    );

    return result;
  } catch (error) {
    throw error;
  }
};

const getDefaultProject = async (proyectId: string) => {
  try {
    const result = await fetches.defaultGetWithCredentials(
      routes.GetProjectRoute,
      proyectId
    );

    return result;
  } catch (error) {
    throw error;
  }
};

const getProjectUsers = async (projectId: string) => {
  try {
    const result = await fetches.defaultGetWithCredentials(
      routes.getProjectUsersRoute,
      projectId
    );

    return result;
  } catch (error) {
    throw error;
  }
};

const getProjectWhereUser = async (userId: string) => {
  try {
    const result = await fetches.defaultGetWithCredentials(
      routes.getProjectsWhereUserRoute,
      userId
    );

    return result;
  } catch (error) {
    throw error;
  }
};

const checkUserInProject = async (projectId: string, userId: string) => {
  try {
    const parsedUrl = parseGetUrl(routes.checkUserInProjectRoute, [
      projectId,
      userId,
    ]);
    const user = await fetches.defaultGetWithCredentials(parsedUrl);

    return user;
  } catch (error) {
    throw error;
  }
};

export default {
  getUserProjects,
  createNewProject,
  getDefaultProject,
  getProjectUsers,
  getProjectWhereUser,
  checkUserInProject,
};
