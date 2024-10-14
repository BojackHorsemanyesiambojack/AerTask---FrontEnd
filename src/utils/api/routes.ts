const defaultRoute = `${import.meta.env.VITE_API}/api/`;
const authenticationRoute = `${defaultRoute}auth/signin`;
const createAccountRoute = `${defaultRoute}auth/signup`;
const verifyEmailRoute = `${defaultRoute}auth/verifyemail`;
const deleteTokenRoute = `${defaultRoute}auth/deleteverificationtoken`;
const deleteAccountRoute = `${defaultRoute}auth/deleteaccount`;
const validateSesionRoute = `${defaultRoute}sesions/validate`;
const getUserProjectsRoute = `${defaultRoute}projects/getuserprojects?UserId=`
const CreateProjectRoute = `${defaultRoute}projects/createproject`
const GetProjectRoute = `${defaultRoute}projects/getproject?ProjectId=`
const getProjectUsersRoute = `${defaultRoute}projects/getprojectusers?ProjectId=`
const getDefaultUserRoute = `${defaultRoute}auth/getuser?UserId=`
const getProjectsWhereUserRoute = `${defaultRoute}projects/getprojectswithuser?UserId=`
const getUsersByQueryUserName = `${defaultRoute}auth/searchuser?UserName&Limit`;
const getProjectTasksRoute = `${defaultRoute}tasks/getprojecttasks?ProjectId=`;
const createProjectTaskRoute = `${defaultRoute}tasks/createprojecttask`;
const deleteProjectTaskRoute = `${defaultRoute}tasks/deleteprojecttask`;
const checkUserInProjectRoute = `${defaultRoute}projects/checkuser?ProjectId&UserId`


export default {
  defaultRoute,
  authenticationRoute,
  createAccountRoute,
  verifyEmailRoute,
  deleteTokenRoute,
  deleteAccountRoute,
  validateSesionRoute,
  getUserProjectsRoute,
  CreateProjectRoute,
  GetProjectRoute,
  getProjectUsersRoute,
  getDefaultUserRoute,
  getProjectsWhereUserRoute,
  getUsersByQueryUserName,
  getProjectTasksRoute,
  createProjectTaskRoute,
  deleteProjectTaskRoute,
  checkUserInProjectRoute
};