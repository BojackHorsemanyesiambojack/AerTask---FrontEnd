export interface ProyectCreationData{
    projectName:string,
    projectDescription:string,
    projectPrivacity:string,
    projectType:string,
    userId:number
}

export const voidProyectCreation:ProyectCreationData = {
    projectName:'',
    projectDescription:'',
    projectPrivacity:'public',
    projectType:'',
    userId:-1
}