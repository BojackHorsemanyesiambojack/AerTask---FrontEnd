import { useEffect } from 'react'
import { Hourglass } from 'react-loader-spinner'
import Sesions from '../../utils/Sesions/Sesions'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function VoidDeleteSession() {
    const navigate = useNavigate();
    useEffect(() => {
        const defaultDeleteSession = async() => {
            try{
                await Sesions.deleteSesion();
                    navigate('/')
            }catch(error){
                error instanceof Error && toast.error(error.message, {
                    position:'bottom-right'
                })
            }
        }
        defaultDeleteSession();
    },[])

  return (
    <div className="w-full h-full items-center justify-center flex flex-col">
        <Hourglass />
        <h3>Cerrando session...</h3>
    </div>
  )
}
