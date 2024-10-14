import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { EmailVerificationForm } from "../../models/interfaces/validations/EmailVerificationForm";
import { EmailVerificationResponse } from "../../models/interfaces/validations/EmailVerificationResponse";
import { useUserContext } from "../../shared/context/UseAuthContext";
import auth from "../../utils/auth/auth";
import { Hourglass } from "react-loader-spinner";

export default function VerificationEmailForm({
  verificationForm,
}: {
  verificationForm: EmailVerificationForm;
}) {
  const [error, setError] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<string>("");
  const {
    user,
    checkAuthUser,
    setIsAuthenticated,
    isAuthenticated,
    isLoading,
  } = useUserContext();
  const [isChecking, setIsChecking] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    try {
      const ResponseVerification: EmailVerificationResponse = {
        Id: verificationForm.id,
        token: verificationCode,
      };
      await auth.VerifyEmail(ResponseVerification);
      setIsAuthenticated(true);
      toast.success("Código de verificación exitoso");
      auth.DeleteToken(verificationForm.id);
      const authResult = await checkAuthUser();
      if(authResult)
        navigate(`../../root/dashboard/${user.userId}`)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        toast.error(error.message);
      }
    } finally {
      setIsChecking(false);
    }
  };

  const handleChangeVerificationCode = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVerificationCode(e.target.value);
  };

  useEffect(() => {
    return () => {
      auth.DeleteToken(verificationForm.id);
    };
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Código de verificación</h2>
      <form onSubmit={handleVerificationSubmit} className="flex flex-col">
        <input
          type="text"
          value={verificationCode}
          onChange={handleChangeVerificationCode}
          placeholder="Ingresa tu código"
          required
          className="border rounded p-2 mb-4"
          maxLength={6}
        />
        {isChecking ? (
          <Hourglass width={16} />
        ) : (
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Verificar Código
          </button>
        )}
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}
