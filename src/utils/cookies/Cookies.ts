import Cookies from "universal-cookie";

const Cookie = new Cookies();

const saveCookie = (cookieName:string, cookieValue:any) => {
    Cookie.set(cookieName, cookieValue, {
        secure:true,
        httpOnly:true,
    });
}

const checkCookie = (cookieName:string):any => {
    Cookie.get(cookieName);
}

const deleteCookie = (cookieName:string) => {
    Cookie.remove(cookieName);
}

export default {saveCookie, checkCookie, deleteCookie};