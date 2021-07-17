import React, {
  // useState,
  //  useContext
  // useEffect
} from 'react';
import JoinSesion from '../pages/JoinSesion';
import Constelacion from '../ui/Constelacion';
// import { AuthContext } from './../context/AuthContext';
const socket  = require('../connection/socket').socket



const CrearSesion = () => {

  // creamos el nombre de la sesion
  const sesiondiaria = "sesion-name";
  //Emitimos el evento al servidor para crear la sesion y le pasamos el identificador
  socket.emit('createNewSesion', sesiondiaria);

  //const auth = useContext(AuthContext);
  //const { authState } = auth;

  return (
    <React.Fragment>
      <JoinSesion/>
      <Constelacion/>
    </React.Fragment>
  );
};

export default CrearSesion;
