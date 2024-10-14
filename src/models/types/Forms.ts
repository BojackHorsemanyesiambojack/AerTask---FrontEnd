export type Iform = {
    label : string,
    type : string,
    maxLength? : number,
    minLength? : number,
    disabled : Boolean,
    placeHolder? : string,
    required : boolean | undefined,
    valueName : string,
    width? : string,
    height?: string,
    options?:Array<string>
}