import fetches from "../api/fetches";
import routes from "../api/routes";

const getAndValidateSesion = async() => {
    try{
        const validation = await validateSesion();

        return validation;
    }catch(error){
        throw error;
    }
}

const validateSesion = async() => {
    try{
        const response = await fetches.defaultPostWithCredentials({}, routes.validateSesionRoute);

        return response;
    }catch(error){
        throw error;
    }
}

export default { getAndValidateSesion };