import { createProjectTask } from "../../models/interfaces/Inputs/CreateProjectTask";
import fetches from "../api/fetches"
import routes from "../api/routes";

const getProjectTasks = async(projectId:string) => {
    try{
        const query = await fetches.defaultGetWithCredentials(routes.getProjectTasksRoute ,projectId);

        return query;
    }catch(error){
        throw error
    }
}

const createNewProjectTask = async(newTask : createProjectTask) => {
    try{
        const creatingTask = await fetches.defaultPostWithCredentials(newTask, routes.createProjectTaskRoute);

        return creatingTask;
    }catch(error){
        throw error;
    }
}

const deleteProjectTask = async(taskId:number) => {

}

export default {getProjectTasks, createNewProjectTask};