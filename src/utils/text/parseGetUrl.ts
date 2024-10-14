export const parseGetUrl = (url:string, params:Array<any>) => {
    let separate = url.split('&');
    for(let i = 0; i < separate.length; i++){
        separate[i]+=`=${params[i]}`
    }
    return separate.join("&");
}