import { SignUpInfo } from "../../models/interfaces/Inputs/CreateAccountInfo";
import { SignInInfo } from "../../models/interfaces/Inputs/LoginInfo";
import { EmailVerificationForm } from "../../models/interfaces/validations/EmailVerificationForm";
import { EmailVerificationResponse } from "../../models/interfaces/validations/EmailVerificationResponse";
import { User } from "../../models/types/Sesion";
import fetches from "../api/fetches";
import routes from "../api/routes";
import { parseGetUrl } from "../text/parseGetUrl";

const Authenticate = async (login: SignInInfo):Promise<User> => {
  try {
    const response= await fetches.defaultPostWithCredentials(
      login,
      routes.authenticationRoute
    );
    return await response.result;
  } catch (error) {
    throw error;
  }
};

const CreateAccount = async (
  input: SignUpInfo
): Promise<EmailVerificationForm | undefined> => {
  try {
    const response: EmailVerificationForm = await fetches.defaultPost(
      input,
      routes.createAccountRoute
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const VerifyEmail = async (Input: EmailVerificationResponse): Promise<void> => {
  try {
    const response = await fetches.defaultPostWithCredentials(
      Input,
      routes.verifyEmailRoute
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const DeleteToken = async (id: number) => {
  try {
    const response = await fetches.defaultPost(id, routes.deleteTokenRoute);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

const DeleteAccount = async (id: number) => {
  try {
    const response = await fetches.defaultPost(id, routes.deleteAccountRoute);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

const CheckIsAuthorized = async (
  id: string,
  sesion: number
): Promise<boolean> => {
  const userId = parseInt(id);
  if (isNaN(userId)) {
    throw new Error("Invalid ID: Must be a number.");
  }
  return userId === sesion;
};

const GetDefaultUser = async (id: string) => {
  try {
    const result = await fetches.defaultGetWithCredentials(
      routes.getDefaultUserRoute,
      id
    );

    return result;
  } catch (error) {
    throw error;
  }
};

const GetUserSearch = async(query:string, limit:number) => {
  try{
    if(query == '' || query.length < 3)return;
      const parsedQuery:string = parseGetUrl(routes.getUsersByQueryUserName, [query, limit]);
      const result = await fetches.defaultGetWithCredentials(parsedQuery)

      return result;
  }catch(error){
    throw error
  }
}

export default {
  Authenticate,
  CreateAccount,
  VerifyEmail,
  DeleteToken,
  DeleteAccount,
  CheckIsAuthorized,
  GetDefaultUser,
  GetUserSearch
};
