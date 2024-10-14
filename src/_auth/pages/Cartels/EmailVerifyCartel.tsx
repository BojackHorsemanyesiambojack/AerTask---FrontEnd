export default function EmailVerifyCartel({email} : {email:string}) {
  return (
    <>
            <h2 className="text-2xl font-bold mb-4">
              Verificar Correo electronico
            </h2>
            <p className="text-gray-400">
              Se te ha enviado un correo electronico al correo:
              <b>{email}</b>
            </p>
          </>
  )
}
