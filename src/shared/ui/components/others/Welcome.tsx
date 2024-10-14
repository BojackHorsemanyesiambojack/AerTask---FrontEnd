export default function Welcome({userName}:{userName:string}) {
  return (
    <>
    {userName?
        (<h2 className="text-2xl font-bold">Bienvenido {userName}</h2>)
        :
        (<p>Cargando...</p>)
        }
    </>
  )
}
