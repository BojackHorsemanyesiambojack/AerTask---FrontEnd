import { useEffect, useState } from "react";
import Modal from 'react-modal';
import Add from "../../../assets/icons/HeroIcons/Add";
import Cancel from "../../../assets/icons/HeroIcons/Cancel";
import IconButton from "../components/buttons/IconButton";
import UserSearch from "../components/users/UserSearch";
import ModalUserContainer from "../containers/ModalUserContainer";

export default function AddColaboratorForm() {
  const [userId, setUserId] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (userId !== '') {
      setOpenModal(true);
    }
  }, [userId]);
  
  const closeModal = () => {
    setOpenModal(false);
    setUserId('');
  };  

  return (
    <div className="flex w-full h-1/2 rounded-md p-3 border">
     <Modal 
        isOpen={openModal} 
        onRequestClose={closeModal} 
        className="flex flex-col items-center justify-center principal-gradient text-white p-6 rounded-md
        border border-white
        "
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        ariaHideApp={false}
      >
        <h2 className="text-2xl font-bold">Agregar colaborador</h2>
        <ModalUserContainer userId={userId} />
        <h3 className="text-lg font-semibold">Desea agregar como colaborador al proyecto?</h3>
        <div className="flex justify-between w-full">
          <IconButton
          Icon={Add}
          onClick={() => {}}
          Text="Enviar invitacion" />
        <IconButton
        Icon={Cancel}
          onClick={closeModal} 
          Text="Cancelar"
        />
        </div>
      </Modal>
    <UserSearch setValue={setUserId} />
    </div>
  )
}
