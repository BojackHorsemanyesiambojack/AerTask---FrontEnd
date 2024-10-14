export type User = {
    userName:string,
    userId:number
}

export const voidUser:User = {
    userName:'User',
    userId:-1
}

export type ProjectUser = {
    userId: number;
    userName:string;
    userRole?: string;
};

export const voidProjectUser:ProjectUser = {
    userId:-1,
    userName:'',
    userRole:''
}
