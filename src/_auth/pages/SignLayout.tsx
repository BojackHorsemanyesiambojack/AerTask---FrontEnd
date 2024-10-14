import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SignUpInfo,
  voidSignUpInfo,
} from "../../models/interfaces/Inputs/CreateAccountInfo";
import {
  SignInInfo,
  voidSignInfo,
} from "../../models/interfaces/Inputs/LoginInfo";
import {
  EmailVerificationForm,
  VoidEmailVerificationForm,
} from "../../models/interfaces/validations/EmailVerificationForm";
import { useUserContext } from "../../shared/context/UseAuthContext";
import Form from "../../shared/ui/components/Form";
import auth from "../../utils/auth/auth";
import { loginFormInputs } from "../Mapping/SignIn";
import { SignUpFormInputs } from "../Mapping/SignUp";
import CreateAccountCartel from "./Cartels/CreateAccountCartel";
import EmailVerifyCartel from "./Cartels/EmailVerifyCartel";
import LoginCartel from "./Cartels/LoginCartel";
import VerificationEmailForm from "./VerificationEmailForm";

export default function SignLayout() {
  const [accountLoginData, setAccountLoginData] =
    useState<SignInInfo>(voidSignInfo);
  const [accountCreatingData, setAccoountCreatingData] =
    useState<SignUpInfo>(voidSignUpInfo);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const location = useLocation();
  const [error, setError] = useState<string>("");
  const [verificationForm, setVerificationForm] =
    useState<EmailVerificationForm>(VoidEmailVerificationForm);
  const navigate = useNavigate();

  useEffect(() => {
    setIsSignUp(location.pathname === "/auth/sign-up");
    setError("");
  }, [location.pathname]);

  const goToEmailVerification = () => {
    setError("");
    setIsSubmited(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isSignUp) {
        const result = await auth.CreateAccount(accountCreatingData);
        toast.success("Cuenta creada con éxito, por favor verifica tu correo");
        if (result) {
          setVerificationForm(result);
          goToEmailVerification();
        }
      } else {
        const result = await auth.Authenticate(accountLoginData);
        if (result) {
          navigate(`../../root/dashboard/${result.userId}`);
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeCreate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccoountCreatingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section
      className={`bg-white rounded-md flex text-gray-800 w-2/3 mx-auto shadow-lg transition-all duration-500
        min-h-96 h-full`}
    >
      <div
        className={`w-1/2 p-6 flex items-center justify-center flex-col transition-all duration-500 h-auto
        ${isSignUp ? "translate-x-full" : "translate-x-1"}`}
      >
        {isSubmited ? (
          <VerificationEmailForm verificationForm={verificationForm} />
        ) : (
          <Form
            SubmitText={isSignUp ? "Crear Cuenta" : "Iniciar Sesión"}
            Action="POST"
            Map={isSignUp ? SignUpFormInputs : loginFormInputs}
            OnSubmit={handleSubmit}
            HandleChange={isSignUp ? handleChangeCreate : handleChangeLogin}
            Values={isSignUp ? accountCreatingData : accountLoginData}
            isLoading={isLoading}
            Width="100%"
            Height={isSignUp ? "100%" : "50%"}
            Display="Col"
            GenError={error}
            SubmitColor="bg-neutral-300"
            InputBG=""
            SubmitTextColor="text-blue-500"
            GenTextStyle=""
          />
        )}
      </div>

      <div
        className={`w-1/2 p-6 flex items-center justify-center bg-gray-800 text-white flex-col transition-all duration-500
        ${isSignUp ? "-translate-x-full" : "-translate-x-0"} text-center`}
      >
        {isSubmited ? (
          <EmailVerifyCartel email={verificationForm.email} />
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">
              {isSignUp ? "Crear Cuenta" : "Iniciar Sesión"}
            </h2>
            {isSignUp ? <LoginCartel /> : <CreateAccountCartel />}
          </>
        )}
      </div>
    </section>
  );
}
