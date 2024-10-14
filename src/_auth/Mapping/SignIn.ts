import { Iform } from "../../models/types/Forms";

export  const loginFormInputs:Array<Iform> = [
    {
      label: "Email",
      type: "email",
      maxLength: 50,
      disabled: false,
      placeHolder: "Ingrese su correo electrónico",
      required: true,
      valueName: "UserEmail",
      width: "32",
      height: "10",
    },
    {
      label: "Contraseña",
      type: "password",
      maxLength: 20,
      minLength: 6,
      disabled: false,
      placeHolder: "Ingrese su contraseña",
      required: true,
      valueName: "UserPassword",
      width: "32",
      height: "10",
    },
];