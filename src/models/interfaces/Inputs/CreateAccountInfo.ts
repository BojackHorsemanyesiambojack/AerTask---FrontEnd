export interface SignUpInfo{
    UserName:string,
    UserEmail:string,
    Password:string,
    BirthDate:Date
}

export const voidSignUpInfo:SignUpInfo = {
    UserName:'',
    UserEmail:'',
    Password:'',
    BirthDate:new Date()
}