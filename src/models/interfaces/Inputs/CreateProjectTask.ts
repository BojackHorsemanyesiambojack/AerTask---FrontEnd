export interface createProjectTask {
    userId:number,
    projectId:string,
    taskName:string,
    taskDescription:string
}

export const voidCreateProjectTask:createProjectTask = {
    userId:-1,
    projectId:'',
    taskName:'',
    taskDescription:''
}