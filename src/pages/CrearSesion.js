import React, {
  // useState,
  useContext
  // useEffect
} from 'react';
import PageTitle from '../components/common/PageTitle';
import { AuthContext } from './../context/AuthContext';
import { socket, mySocketId } from '../connection/socket';



const CrearSesion = () => {

  // creamos el nombre de la sesion
const sesiondiaria = "sesion-name";
//Emitimos el evento al servidor para crear la sesion y le pasamos el identificador
socket.emit('createNewSesion', sesiondiaria);

const auth = useContext(AuthContext);
const { authState } = auth;

  return (
    <>
      <PageTitle title="Crear Sesion" />
      <p className="text-black">
      {authState.userInfo.firstName}
      </p>     
      <p className="text-black">
          {mySocketId}
      </p>
    </>
  );
};

export default CrearSesion;
