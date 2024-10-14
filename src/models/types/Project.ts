import { User } from "./Sesion";

export type Project = {
    projectId: number;
    projectName: string;
    projectDescription?: string;
    createdAt: Date;
    updatedAt: Date;
    projectStatus?: string;
    projectPrivacy?: string;
    projectType?: string;
    userId: number;
}

export const exampleProject: Project = {
    projectId: 1,
    projectName: "Example Project",
    projectDescription: "This is an example project.",
    createdAt: new Date(),
    updatedAt: new Date(),
    projectStatus: "Active",
    projectPrivacy: "Public",
    projectType: "TypeA",
    userId: 123
};

export type projectTask = {
    projectTaskName:string,
    projectTaskDescription:string,
    projectTaskStatus:string,
    addByUser:number
}

export const voidProjectTask:projectTask = {
    projectTaskName:'',
    projectTaskDescription:'',
    projectTaskStatus:'canceled',
    addByUser:-1
}

export type projectTaskAndUser = {
    task:projectTask,
    profile:User
}