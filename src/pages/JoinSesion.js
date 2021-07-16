import React from 'react'
import { socket } from '../connection/socket'

/**
 * 'Join Sesion' es donde nos unimos a la sesion creada
 */

const JoinSesionRoom = (sesionid, userName, isAdmin) => {
    /**
     * Para esta instancia del navegador, queremos unirnos a la Sala.
     * Por ahora asumimos que la Sala existe en el Backend.
     * Pasamos los datos de sesionId, userName y isCreator al objeto idData
     * para emitirlo a traves del socket al Backend
     * TO-DO: manejar el caso de que la Sala no exista.
     */
    const idData = {
        sesionId : sesionid,
        userName : userName,
        isAdmin: isAdmin
    }
    console.log("joinsesion - IDdATA", idData);
    socket.emit("userJoinSesion", idData)
}

const JoinSesion = (props) => {
    /**
     * En las props vienen el userName y isAdmin en true
     * Extraemos el 'sesionId' de la URL ya que es el ID de la Sala.
     */

    const { sesionid } = 'sesion-name';
    // console.log("(JoinSesion) sesionid:", sesionid);
    // console.log("(JoinSesion) isAdmin: ", props.isAdmin);

    JoinSesionRoom(sesionid, props.userName, props.isAdmin)

    return <div>
        <h4 style = {{textAlign: "center"}}>Constelaciones Familiares !</h4>
    </div>
}

export default JoinSesion
