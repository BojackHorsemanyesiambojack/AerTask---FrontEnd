import React from "react"
import { ProjectUser, User } from "./Sesion"

export type IContext = {
    user:User,
    isLoading:boolean,
    setUser:React.Dispatch<React.SetStateAction<User>>,
    isAuthenticated:boolean,
    setIsAuthenticated:React.Dispatch<React.SetStateAction<boolean>>,
    checkAuthUser:() => Promise<boolean | number>
}

export type IContextOnProject = {
    userInProject:ProjectUser,
    isLoading:boolean,
    isChecked:boolean,
    setIsChecked:React.Dispatch<React.SetStateAction<boolean>>
    setUserInProject:React.Dispatch<React.SetStateAction<User>>,
    checkUserContextInProject:() => Promise<boolean>
}